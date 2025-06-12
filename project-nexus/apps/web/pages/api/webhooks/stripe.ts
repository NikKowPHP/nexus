import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sig = req.headers['stripe-signature'] as string;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const error = err as Error;
    console.error(`Webhook Error: ${error.message}`);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      await handleCheckoutSessionCompleted(session);
      break;
    case 'customer.subscription.updated':
      const subscription = event.data.object as Stripe.Subscription;
      await handleSubscriptionUpdated(subscription);
      break;
    case 'customer.subscription.deleted':
      const deletedSubscription = event.data.object as Stripe.Subscription;
      await handleSubscriptionDeleted(deletedSubscription);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const userId = session.client_reference_id;
  const customerId = session.customer as string;
  const subscriptionId = session.subscription as string;

  await prisma.$executeRaw`
    INSERT INTO "Subscription" (id, "userId", "stripeCustomerId", "stripeSubscriptionId", status, "createdAt", "updatedAt")
    VALUES (gen_random_uuid(), ${userId}, ${customerId}, ${subscriptionId}, 'ACTIVE', NOW(), NOW())
  `;
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  await prisma.$executeRaw`
    UPDATE "Subscription"
    SET 
      status = ${subscription.status.toUpperCase()},
      "currentPeriodEnd" = to_timestamp(${subscription.current_period_end}),
      "updatedAt" = NOW()
    WHERE "stripeSubscriptionId" = ${subscription.id}
  `;
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  await prisma.$executeRaw`
    UPDATE "Subscription"
    SET 
      status = 'CANCELED',
      "updatedAt" = NOW()
    WHERE "stripeSubscriptionId" = ${subscription.id}
  `;
}