import { useState } from 'react';
import Card from '../src/components/Card';
import { CheckoutForm } from '../src/components/CheckoutForm';

export const PlanSelector = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelection = (plan: string) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="plan-selector">
      <Card
        header="Basic Plan"
        body={
          <>
            <div>$9.99/month</div>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
            </ul>
            <button
              className={selectedPlan === 'basic' ? 'selected' : ''}
              onClick={() => handlePlanSelection('basic')}
            >
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
            <button
              className={selectedPlan === 'pro' ? 'selected' : ''}
              onClick={() => handlePlanSelection('pro')}
            >
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
            <button
              className={selectedPlan === 'enterprise' ? 'selected' : ''}
              onClick={() => handlePlanSelection('enterprise')}
            >
              Select Plan
            </button>
          </>
        }
      />
      {selectedPlan && (
        <div className="checkout-section">
          <CheckoutForm plan={selectedPlan} />
        </div>
      )}
    </div>
  );
};
