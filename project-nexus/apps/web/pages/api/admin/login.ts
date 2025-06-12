import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { RateLimiterMemory } from 'rate-limiter-flexible';

const loginSchema = z.object({
  password: z.string()
});

// Configure rate limiter: max 5 attempts per minute per IP
const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get client IP address
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  try {
    await rateLimiter.consume(clientIp as string);
  } catch (rateLimiterRes) {
    const rlRes = rateLimiterRes as { msBeforeNext: number };
    return res.status(429).json({
      success: false,
      message: 'Too many requests',
      retryAfter: Math.ceil(rlRes.msBeforeNext / 1000)
    });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: 'Invalid request body',
      errors: result.error.issues
    });
  }

  const { password } = result.data;
  
  if (password === 'admin123') {
    res.setHeader('Set-Cookie', 'admin-token=admin-token; Path=/; HttpOnly; SameSite=Strict');
    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ success: false, message: 'Invalid credentials' });
}