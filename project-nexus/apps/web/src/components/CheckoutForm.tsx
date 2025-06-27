import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface Plan {
  id: string;
  name: string;
  price: number;
  interval: string;
}

export default function CheckoutForm({ plans }: { plans: Plan[] }) {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      setError('Please select a plan');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        throw new Error('Not authenticated');
      }

      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.id}`
        },
        body: JSON.stringify({ priceId: selectedPlan }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();
      window.location.href = sessionId;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      
      <div className="space-y-2">
        {plans.map((plan) => (
          <label key={plan.id} className="flex items-center space-x-2">
            <input
              type="radio"
              name="plan"
              value={plan.id}
              checked={selectedPlan === plan.id}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="form-radio"
            />
            <span>
              {plan.name} - ${plan.price}/{plan.interval}
            </span>
          </label>
        ))}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {isLoading ? 'Processing...' : 'Subscribe'}
      </button>
    </form>
  );
}