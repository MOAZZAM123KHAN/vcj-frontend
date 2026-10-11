import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';
import { ALLOWED_TAGS, ReviewLang } from '@/lib/reviewTemplates';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FOCUS_ANGLES = [
  'staff behaviour',
  'design variety',
  'purity and hallmark',
  'price transparency',
  'bridal collection',
  'family shopping experience',
  'service and packing',
];

const ALLOWED_LANGS: ReviewLang[] = ['hinglish', 'hindi', 'english'];
const MAX_BODY_BYTES = 2048; // 2 KB limit

export async function POST(request: Request) {
  // 1. Rate limiting check (10 requests per minute per IP)
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip, 10, 60 * 1000);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: 'Too many requests. Please try again in a minute.',
        retryAfter: rateLimit.resetInSeconds,
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(rateLimit.resetInSeconds),
        },
      }
    );
  }

  // 2. Body size check (reject larger than 2 KB)
  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: 'Request body exceeds 2 KB limit.' },
      { status: 413 }
    );
  }

  let rawBody = '';
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ reviews: [] }, { status: 500 });
  }

  if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: 'Request body exceeds 2 KB limit.' },
      { status: 413 }
    );
  }

  // 3. Parse and validate JSON input
  let parsedJson: { lang?: string; tags?: unknown };
  try {
    parsedJson = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ reviews: [] }, { status: 500 });
  }

  const { lang, tags } = parsedJson;

  // Validate lang
  if (!lang || typeof lang !== 'string' || !ALLOWED_LANGS.includes(lang.toLowerCase() as ReviewLang)) {
    return NextResponse.json({ reviews: [] }, { status: 500 });
  }
  const cleanLang = lang.toLowerCase() as ReviewLang;

  // Validate tags (array of at most 6 short strings from allowed chip list)
  if (!Array.isArray(tags)) {
    return NextResponse.json({ reviews: [] }, { status: 500 });
  }

  if (tags.length > 6) {
    return NextResponse.json({ reviews: [] }, { status: 500 });
  }

  const cleanTags: string[] = [];
  const allowedTagsSet = new Set(ALLOWED_TAGS.map((t) => t.toLowerCase()));

  for (const tag of tags) {
    if (typeof tag !== 'string' || tag.length > 50) {
      return NextResponse.json({ reviews: [] }, { status: 500 });
    }
    const trimmed = tag.trim();
    if (trimmed && allowedTagsSet.has(trimmed.toLowerCase())) {
      cleanTags.push(trimmed);
    }
  }

  // 4. Check for Gemini API Key
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey === 'your_gemini_api_key_here') {
    // Return empty reviews with 500 so client falls back seamlessly without leaking
    return NextResponse.json({ reviews: [] }, { status: 500 });
  }

  // 5. Select random focus angle
  const randomAngle = FOCUS_ANGLES[Math.floor(Math.random() * FOCUS_ANGLES.length)];
  const tagsStr = cleanTags.length > 0 ? cleanTags.join(', ') : 'overall experience';

  const prompt = `You are a real customer who just bought jewellery from Vimal Changal Jewellers in Jaunpur, Uttar Pradesh. Write 3 different Google review suggestions, each 25 to 45 words.
Language: ${cleanLang}. (hinglish means Hindi written in Roman script, hindi means Devanagari script.)
What the customer liked: ${tagsStr}.
Focus angle for variety: ${randomAngle}.
Rules:
- Sound natural and human, the way people write on WhatsApp. No marketing language.
- Mention 'Jaunpur' or 'jewellery' at most once per review, and only where it fits naturally. No keyword stuffing.
- Do not invent specific facts: no staff names, no prices, no discounts, no dates, no product details the customer did not choose.
- At most one emoji per review.
- The 3 reviews must differ clearly in tone, sentence structure, and opening words.
- Return ONLY a JSON array of 3 strings, with no extra text and no markdown.`;

  try {
    const ai = new GoogleGenAI({ apiKey });
    const targetModel = process.env.GEMINI_MODEL || 'gemini-3.5-flash';
    let responseText = '';

    try {
      const response = await ai.models.generateContent({
        model: targetModel,
        contents: prompt,
        config: {
          maxOutputTokens: 1000,
        },
      });
      responseText = response.text || '';
    } catch {
      // If target model encounters temporary 503 high demand or 404, fallback to gemini-3.5-flash-lite
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-3.5-flash-lite',
        contents: prompt,
        config: {
          maxOutputTokens: 1000,
        },
      });
      responseText = fallbackResponse.text || '';
    }

    if (!responseText) {
      return NextResponse.json({ reviews: [] }, { status: 500 });
    }

    // Strip any ```json or ``` markdown code blocks
    let cleaned = responseText.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
    }

    const parsed = JSON.parse(cleaned);

    if (
      Array.isArray(parsed) &&
      parsed.length >= 1 &&
      parsed.every((item) => typeof item === 'string' && item.trim().length > 0)
    ) {
      return NextResponse.json({ reviews: parsed.slice(0, 3) });
    }

    return NextResponse.json({ reviews: [] }, { status: 500 });
  } catch {
    // If Gemini returns 429 or any error, return { reviews: [] } with status 500
    // Never leak error details or the API key
    return NextResponse.json({ reviews: [] }, { status: 500 });
  }
}
