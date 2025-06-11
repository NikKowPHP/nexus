import { useState } from 'react';
import Card from '../src/components/Card';
import { CheckoutForm } from '../src/components/CheckoutForm';

export const PlanSelector = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="plan-selector">
      <div className={selectedPlan === 'basic' ? 'selected-plan' : ''}>
     
          <Card
            header="Basic Plan"
        body={
          <>
            <div>$9.99/month</div>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
            </ul>
            <button onClick={() => {
              setShowCheckout(true);
            }}>
              Select Plan
            </button>
          </>
        }
      />
      <Card
        header="Pro Plan"
        body={
          <>
            <div>$19.99/month</div>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button onClick={() => {
              setSelectedPlan(selectedPlan === 'basic' ? null : 'basic');
              setSelectedPlan(selectedPlan === 'enterprise' ? null : 'enterprise');
              setShowCheckout(true);
            }}>
              Select Plan
            </button>
          </>
        }
      />
      <Card
        header="Enterprise Plan"
        body={
          <>
            <div>$49.99/month</div>
            <ul>
              <li>All Features</li>
              <li>Priority Support</li>
            </ul>
            <button onClick={() => {
              setShowCheckout(true);
            }}>
              Select Plan
            </button>
          </>
        }
      />
      {showCheckout && (
        <div className="checkout-overlay">
          <CheckoutForm />
          <button onClick={() => setShowCheckout(false)}>Cancel</button>
        </div>
      )}
      </div>
      </div>
  );
};
