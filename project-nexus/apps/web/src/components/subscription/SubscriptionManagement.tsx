import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { SubscriptionButton } from './SubscriptionButton';

interface SubscriptionData {
  is_subscribed: boolean;
  subscription_status: string;
  stripe_customer_id: string;
}

export const SubscriptionManagement = () => {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('users')
        .select('is_subscribed, subscription_status, stripe_customer_id')
        .eq('id', user.id)
        .single();

      if (!error && data) {
        setSubscription(data);
      }
      setLoading(false);
    };

    fetchSubscription();
  }, []);

  if (loading) return <div>Loading subscription details...</div>;
  if (!subscription) return <div>No subscription data found</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subscription Management</h2>
      
      <div className="mb-4">
        <p className="font-semibold">Current Status: {subscription.subscription_status}</p>
        <p>Subscription: {subscription.is_subscribed ? 'Active' : 'Inactive'}</p>
      </div>

      <div className="mt-6">
        <SubscriptionButton isSubscribed={subscription.is_subscribed} />
      </div>

      {subscription.is_subscribed && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Danger Zone</h3>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={() => {/* TODO: Implement cancellation */}}
          >
            Cancel Subscription
          </button>
        </div>
      )}
    </div>
  );
};