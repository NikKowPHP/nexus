import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../src/lib/supabaseClient';
import Stripe from 'stripe';

interface SessionCreateParams {
  payment_method_types: string[];
  line_items: Array<{
    price: string;
    quantity: number;
  }>;
  mode: string;
  success_url: string;
  cancel_url: string;
  customer_email?: string;
  metadata?: {
    userId: string;
  };
}

interface StripeWithCheckout extends Stripe {
  checkout: {
    sessions: {
      create(params: SessionCreateParams): Promise<Stripe.Checkout.Session>;
      retrieve(id: string): Promise<Stripe.Checkout.Session>;
    };
  };
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
}) as unknown as StripeWithCheckout;

export default function SuccessPage() {
  const router = useRouter();
  const [message, setMessage] = useState('Verifying payment...');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const verifySession = async () => {
      const sessionId = router.query.session_id;
      if (!sessionId || typeof sessionId !== 'string') {
        setIsError(true);
        setMessage('Invalid session ID');
        return;
      }

      try {
        // Retrieve the Stripe session
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        
        // Get the current user
        const { data: { user }, error: authError } = await supabase.auth.getUser();
        
        if (authError || !user) {
          throw new Error('User not authenticated');
        }

        // Update user subscription status in database
        const { error: dbError } = await supabase
          .from('users')
          .update({ 
            is_subscribed: true,
            stripe_customer_id: session.customer 
          })
          .eq('id', user.id);

        if (dbError) {
          throw dbError;
        }

        setMessage('Payment successful! Your subscription is now active.');
      } catch (error) {
        console.error('Payment verification failed:', error);
        setIsError(true);
        setMessage('Payment verification failed. Please contact support.');
      }
    };

    verifySession();
  }, [router.query.session_id]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={`p-6 rounded-lg ${isError ? 'bg-red-100' : 'bg-green-100'}`}>
        <p className={isError ? 'text-red-700' : 'text-green-700'}>
          {message}
        </p>
      </div>
    </div>
  );
}