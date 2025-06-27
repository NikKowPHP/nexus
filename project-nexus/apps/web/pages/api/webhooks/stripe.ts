import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { supabase } from '../../../../src/lib/supabaseClient';
import { Readable } from 'stream';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'] as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return res.status(400).send('Webhook Error');
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const session = event.data.object as any;
        await handleCheckoutSessionCompleted(session);
        break;
      
      case 'customer.subscription.updated':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const subscription = event.data.object as any;
        await handleSubscriptionUpdated(subscription);
        break;
      
      case 'customer.subscription.deleted':
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const deletedSubscription = event.data.object as any;
        await handleSubscriptionDeleted(deletedSubscription);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    res.status(500).send('Internal Server Error');
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleCheckoutSessionCompleted(session: any) {
  if (!session.customer) return;

  const { error } = await supabase
    .from('users')
    .update({ 
      is_subscribed: true,
      stripe_customer_id: session.customer
    })
    .eq('id', session.metadata?.userId);

  if (error) throw error;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleSubscriptionUpdated(subscription: any) {
  const { error } = await supabase
    .from('users')
    .update({ 
      subscription_status: subscription.status
    })
    .eq('stripe_customer_id', subscription.customer);

  if (error) throw error;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function handleSubscriptionDeleted(subscription: any) {
  const { error } = await supabase
    .from('users')
    .update({ 
      is_subscribed: false,
      subscription_status: 'canceled'
    })
    .eq('stripe_customer_id', subscription.customer);

  if (error) throw error;
}