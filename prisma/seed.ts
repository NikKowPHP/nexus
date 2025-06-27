// @ts-ignore - Prisma client will be generated
import { PrismaClient } from '@prisma/client';
// @ts-ignore - Stripe types will be installed
import Stripe from 'stripe';

declare const process: {
  env: {
    STRIPE_SECRET_KEY: string;
  };
  exit(code?: number): never;
};

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
});

async function syncPlans() {
  try {
    const plans = await stripe.plans.list({ active: true, expand: ['data.product'] });
    
    for (const plan of plans.data) {
      const product = plan.product as Stripe.Product;
      
      await prisma.plan.upsert({
        where: { stripeId: plan.id },
        update: {
          name: product.name,
          price: plan.amount ? plan.amount / 100 : 0,
          interval: plan.interval,
          description: product.description || undefined,
        },
        create: {
          stripeId: plan.id,
          name: product.name,
          price: plan.amount ? plan.amount / 100 : 0,
          interval: plan.interval,
          description: product.description || undefined,
        },
      });
    }
    
    console.log('Successfully synced plans:', plans.data.length);
  } catch (error) {
    console.error('Error syncing plans:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

syncPlans();