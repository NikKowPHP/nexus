import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { getSession } from '@supabase/auth-helpers-nextjs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabaseSession = await getSession({ req });

  if (req.method === 'GET') {
    res.status(200).json({ message: 'Subscription endpoint working' });
  } else if (req.method === 'POST' && supabaseSession) {
    const { plan } = req.body;

    if (!plan) {
      return res.status(400).json({ error: 'Plan is required' });
    }

    let priceId: string;

    // Map plan names to Stripe price IDs
    switch (plan) {
      case 'basic':
        priceId = process.env.STRIPE_BASIC_PRICE_ID!;
        break;
      case 'pro':
        priceId = process.env.STRIPE_PRO_PRICE_ID!;
        break;
      case 'enterprise':
        priceId = process.env.STRIPE_ENTERPRISE_PRICE_ID!;
        break;
      default:
        return res.status(400).json({ error: 'Invalid plan' });
    }

    try {
      // Create a checkout session
      const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/cancel`,
        customer_email: supabaseSession.user.email,
      });

      res.status(200).json({ id: checkoutSession.id });
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}