import { NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/rateLimit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip, 10, 60 * 1000);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    );
  }

  try {
    const { password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword || adminPassword.trim() === '') {
      // If no admin password is set in env, allow access or warn
      return NextResponse.json({ valid: true, warning: 'ADMIN_PASSWORD not set in environment.' });
    }

    if (password === adminPassword) {
      return NextResponse.json({ valid: true });
    }

    return NextResponse.json({ valid: false, error: 'Incorrect password.' }, { status: 401 });
  } catch {
    return NextResponse.json({ valid: false, error: 'Invalid request.' }, { status: 400 });
  }
}
