import { Stripe as StripeJS, StripeConstructorOptions } from '@stripe/stripe-js';
import '@stripe/stripe-js/types/stripe-js';

declare module 'stripe' {
  namespace Stripe {
    interface Event {
      type: string;
      data: {
        object: any;
      };
    }

    namespace Checkout {
      interface Session {
        id: string;
        customer: string;
        subscription: string;
        client_reference_id: string;
      }
    }

    interface Subscription {
      id: string;
      status: string;
      current_period_end: number;
    }
  }

  class Stripe extends StripeJS {
    webhooks: {
      constructEvent: (
        payload: string | Buffer,
        header: string | Buffer | string[],
        secret: string
      ) => Stripe.Event;
    };
    checkout: {
      sessions: {
        create: (params: any) => Promise<any>;
      };
    };
    
    constructor(secretKey: string, options?: StripeConstructorOptions);
  }

  export = Stripe;
}