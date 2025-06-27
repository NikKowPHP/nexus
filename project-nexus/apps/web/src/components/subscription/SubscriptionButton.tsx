import { useState } from 'react';

interface SubscriptionButtonProps {
  isSubscribed: boolean;
}

export const SubscriptionButton = ({ isSubscribed }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      window.location.href = data.sessionId;
    } catch (error) {
      console.error('Subscription error:', error);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      disabled={loading}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
    >
      {loading ? 'Processing...' : isSubscribed ? 'Manage Subscription' : 'Subscribe Now'}
    </button>
  );
};