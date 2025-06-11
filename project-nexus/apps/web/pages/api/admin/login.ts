import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { password } = req.body;
  
  if (password === 'admin123') {
    res.setHeader('Set-Cookie', 'admin-token=admin-token; Path=/; HttpOnly; SameSite=Strict');
    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ success: false, message: 'Invalid credentials' });
}