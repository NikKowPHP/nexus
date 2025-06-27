import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
});

interface StripePrice {
  id: string;
  unit_amount: number | null;
  currency: string;
  recurring?: {
    interval: string;
  };
  product: {
    name?: string;
    description?: string;
  } | string;
}

interface StripeWithPrices {
  prices: {
    list(params: {
      limit: number;
      active: boolean;
      expand: string[];
    }): Promise<{ data: StripePrice[] }>;
  };
}

export async function syncStripePlans() {
  try {
    const stripeClient = stripe as unknown as StripeWithPrices;
    const stripePrices = await stripeClient.prices.list({ 
      limit: 100,
      active: true,
      expand: ['data.product']
    });
    
    for (const price of stripePrices.data) {
      const product = typeof price.product === 'string' 
        ? { name: '', description: '' }
        : price.product;
        
      await prisma.subscriptionPlan.upsert({
        where: { stripePlanId: price.id },
        update: {
          name: product.name || '',
          price: price.unit_amount ? price.unit_amount / 100 : 0,
          currency: price.currency,
          interval: price.recurring?.interval || '',
          description: product.description || null,
        },
        create: {
          stripePlanId: price.id,
          name: product.name || '',
          price: price.unit_amount ? price.unit_amount / 100 : 0,
          currency: price.currency,
          interval: price.recurring?.interval || '',
          description: product.description || null,
        },
      });
    }

    // Remove plans that no longer exist in Stripe
    const dbPlans = await prisma.subscriptionPlan.findMany();
    for (const dbPlan of dbPlans) {
      if (!stripePrices.data.find(p => p.id === dbPlan.stripePlanId)) {
        await prisma.subscriptionPlan.delete({
          where: { id: dbPlan.id },
        });
      }
    }

    console.log('Successfully synced Stripe plans');
  } catch (error) {
    console.error('Error syncing Stripe plans:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}