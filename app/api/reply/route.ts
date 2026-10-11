import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

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
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: 'Request body exceeds 2 KB limit.' },
      { status: 413 }
    );
  }

  // 3. Parse JSON
  let body: {
    reviewText?: string;
    rating?: number;
    customerName?: string;
    password?: string;
  };
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const { reviewText, rating, customerName, password } = body;

  // 4. Verify admin password if configured
  const envPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = password || request.headers.get('x-admin-password') || '';

  if (envPassword && envPassword.trim() !== '') {
    if (!providedPassword || providedPassword !== envPassword) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid admin password.' },
        { status: 401 }
      );
    }
  }

  // 5. Validate input
  if (!reviewText || typeof reviewText !== 'string' || reviewText.trim().length === 0) {
    return NextResponse.json(
      { error: 'Review text is required.' },
      { status: 400 }
    );
  }

  const parsedRating = Number(rating);
  if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
    return NextResponse.json(
      { error: 'Rating must be a number between 1 and 5.' },
      { status: 400 }
    );
  }

  const cleanCustomerName =
    customerName && typeof customerName === 'string' && customerName.trim().length > 0
      ? customerName.trim().slice(0, 80)
      : 'not available';

  const cleanReviewText = reviewText.trim().slice(0, 1000);

  // 6. Build Prompt
  const prompt = `You are the owner of Vimal Changal Jewellers, Jaunpur. Write a short, warm, professional reply to this Google review in Hinglish (Roman Hindi), 20 to 40 words.
Review: ${cleanReviewText}
Rating: ${parsedRating} out of 5
Customer name: ${cleanCustomerName}
Rules:
- Address the customer by name if available.
- Thank them and refer to something specific they mentioned.
- For 4 to 5 stars: warm thanks and invite them to visit again.
- For 1 to 3 stars: apologise sincerely, do not argue or make excuses, and invite them to contact the shop directly. Do not offer discounts or compensation.
- Mention 'Vimal Changal Jewellers' or 'Jaunpur' at most once, naturally.
- No invented facts. At most one emoji.
Return only the reply text.`;

  // 7. Call Gemini
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey === 'your_gemini_api_key_here') {
    // Generate high quality fallback reply based on rating
    let fallbackReply = '';
    const nameGreeting = cleanCustomerName !== 'not available' ? `Namaste ${cleanCustomerName} ji, ` : 'Namaste ji, ';

    if (parsedRating >= 4) {
      fallbackReply = `${nameGreeting}Vimal Changal Jewellers par aapka feedback padhkar bahut khushi hui. Aapke vishwas aur saharaahna ke liye dil se shukriya. Agli baar shopping ke liye zaroor padhariye! 🙏`;
    } else {
      fallbackReply = `${nameGreeting}Aapko huye asuvidha ke liye humein khed hai. Hamari prathmikta har customer ka santusht hona hai. Kripya hamare showroom par ya direct contact karein taaki hum ise theek kar sakein 🙏`;
    }
    return NextResponse.json({ reply: fallbackReply });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const targetModel = process.env.GEMINI_MODEL || 'gemini-3.5-flash';
    let replyText = '';

    try {
      const response = await ai.models.generateContent({
        model: targetModel,
        contents: prompt,
        config: {
          maxOutputTokens: 500,
        },
      });
      replyText = response.text ? response.text.trim() : '';
    } catch {
      // If target model encounters temporary 503 high demand or 404, fallback to gemini-3.5-flash-lite
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-3.5-flash-lite',
        contents: prompt,
        config: {
          maxOutputTokens: 500,
        },
      });
      replyText = fallbackResponse.text ? fallbackResponse.text.trim() : '';
    }

    if (!replyText) {
      return NextResponse.json({ error: 'Failed to generate reply.' }, { status: 500 });
    }

    // Clean any surrounding quotes
    let cleanReply = replyText.trim();
    if (
      (cleanReply.startsWith('"') && cleanReply.endsWith('"')) ||
      (cleanReply.startsWith("'") && cleanReply.endsWith("'"))
    ) {
      cleanReply = cleanReply.slice(1, -1).trim();
    }

    return NextResponse.json({ reply: cleanReply });
  } catch {
    // Never leak error details or the API key
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
