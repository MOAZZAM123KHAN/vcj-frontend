// In-memory rate limiter per IP address
// Default: 10 requests per minute per IP

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

// Periodically clean up expired entries to avoid memory leaks
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupExpired() {
  const now = Date.now();
  if (now - lastCleanup > CLEANUP_INTERVAL_MS) {
    lastCleanup = now;
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }
}

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetInSeconds: number;
}

export function checkRateLimit(
  ip: string,
  limit: number = 10,
  windowMs: number = 60 * 1000
): RateLimitResult {
  cleanupExpired();

  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // New or expired window
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      allowed: true,
      limit,
      remaining: limit - 1,
      resetInSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (record.count >= limit) {
    const resetInSeconds = Math.max(1, Math.ceil((record.resetTime - now) / 1000));
    return {
      allowed: false,
      limit,
      remaining: 0,
      resetInSeconds,
    };
  }

  record.count += 1;
  const resetInSeconds = Math.max(1, Math.ceil((record.resetTime - now) / 1000));
  return {
    allowed: true,
    limit,
    remaining: limit - record.count,
    resetInSeconds,
  };
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0].trim();
    if (first) return first;
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp.trim();

  return '127.0.0.1';
}
