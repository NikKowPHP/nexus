import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

interface UserSubscription {
  id: string;
  is_subscribed: boolean;
  stripe_customer_id?: string;
  subscription_status?: string;
}

export default function SubscriptionPortal() {
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (data) {
      setSubscription(data);
      setLoading(false);
    }
  };

  const manageSubscription = async () => {
    setLoading(true);
    const response = await fetch('/api/subscriptions/manage', {
      method: 'POST'
    });
    const { url } = await response.json();
    router.push(url);
  };

  if (loading) {
    return <div>Loading subscription details...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Subscription Management</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h3 className="font-semibold">Current Status:</h3>
          <p>{subscription?.is_subscribed ? 'Active' : 'Inactive'}</p>
        </div>

        <button
          onClick={manageSubscription}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Manage Billing
        </button>
      </div>
    </div>
  );
}