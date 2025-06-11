declare module 'stripe' {
  import { Stripe as StripeJS } from '@stripe/stripe-js';

  class Stripe extends StripeJS {
    constructor(secretKey: string, options?: object);
  }

  export = Stripe;
}