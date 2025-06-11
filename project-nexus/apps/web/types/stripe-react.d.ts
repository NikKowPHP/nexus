declare module '@stripe/react-stripe-js' {
  import * as React from 'react';
  import { Stripe, StripeElement, StripeElementType } from '@stripe/stripe-js';

  export const Elements: React.FC<{ stripe: Stripe; fontFamily?: string }>;
  export const CardElement: React.FC<StripeElement>;
  export const useStripe: () => Stripe | null;
  export const useElements: () => {
    getElement: (type: StripeElementType) => StripeElement | null;
  } | null;
}