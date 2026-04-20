import { NextFunction, Request, Response } from 'express';

type RateLimitOptions = {
  windowMs: number;
  max: number;
  message?: string;
  keyPrefix?: string;
};

type Entry = {
  count: number;
  resetAt: number;
};

const requestStore = new Map<string, Entry>();

function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];

  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }

  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0] || 'unknown';
  }

  return req.ip || req.socket.remoteAddress || 'unknown';
}

export function createRateLimiter({
  windowMs,
  max,
  message = 'Too many requests. Please try again later.',
  keyPrefix = 'global',
}: RateLimitOptions) {
  return (req: Request, res: Response, next: NextFunction) => {
    const now = Date.now();
    const key = `${keyPrefix}:${getClientIp(req)}`;
    const current = requestStore.get(key);

    if (!current || current.resetAt <= now) {
      requestStore.set(key, {
        count: 1,
        resetAt: now + windowMs,
      });
      return next();
    }

    if (current.count >= max) {
      const retryAfterSeconds = Math.max(1, Math.ceil((current.resetAt - now) / 1000));
      res.setHeader('Retry-After', String(retryAfterSeconds));
      return res.status(429).json({
        message,
        retry_after_seconds: retryAfterSeconds,
      });
    }

    current.count += 1;
    requestStore.set(key, current);
    return next();
  };
}
