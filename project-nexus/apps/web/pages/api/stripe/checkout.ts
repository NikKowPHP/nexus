import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { session_id } = req.query;

  if (typeof session_id !== 'string') {
    res.status(400).json({ error: 'Invalid session ID' });
    return;
  }

  res.writeHead(307, { Location: `https://checkout.stripe.com/c/pay/${session_id}` });
  res.end();
}