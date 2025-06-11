import { useState } from 'react';

interface CheckoutFormProps {
  plan: string | null;
}

export const CheckoutForm = ({ plan }: CheckoutFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!plan) {
      setError('No plan selected');
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // Create a checkout session on the server
      const response = await fetch('/api/subscriptions/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();

      if (response.ok && data.id) {
        // Redirect to Stripe checkout
        window.location.href = `/api/stripe/checkout?session_id=${data.id}`;
      } else {
        setError(data.error || 'Failed to create checkout session');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }

    setProcessing(false);
  };

  return (
    <div className="checkout-form">
      {plan && (
        <div className="plan-summary">
          <h3>You are purchasing:</h3>
          <p>{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={processing || !plan}>
          {processing ? 'Processing...' : 'Pay'}
        </button>
      </form>
    </div>
  );
};