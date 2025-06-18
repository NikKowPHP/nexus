# Stripe Subscription Implementation Plan for Project Nexus
**Version:** 2.0 (Refined)
**Date:** 6/10/2025

## 1. Overview
This document details the refined, production-ready plan for integrating Stripe subscriptions, including environment management, local testing, and secure webhook handling.

## 2. Environment Variables
The application will use the following environment variables to manage Stripe environments.

| Variable Name                  | Environment | Purpose                                                 | Example Value                        |
| ------------------------------ | ----------- | ------------------------------------------------------- | ------------------------------------ |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Production  | Frontend key to initialize Stripe.js                | `pk_live_...`                        |
| `STRIPE_SECRET_KEY`            | Production  | Backend key for all Stripe API calls.                 | `sk_live_...`                        |
| `STRIPE_WEBHOOK_SECRET`        | Production  | Secret to verify incoming webhooks from Stripe.       | `whsec_...`                          |
| `STRIPE_PRO_MONTHLY_PRICE_ID`  | Production  | The ID of the "Pro Monthly" plan in Stripe.             | `price_...`                          |
| `STRIPE_PRO_ANNUAL_PRICE_ID`   | Production  | The ID of the "Pro Annual" plan in Stripe.              | `price_...`                          |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Development | **Test Mode** key for the frontend.                     | `pk_test_...`                        |
| `STRIPE_SECRET_KEY`            | Development | **Test Mode** key for the backend.                      | `sk_test_...`                        |
| `STRIPE_WEBHOOK_SECRET`        | Development | **Test Mode** webhook secret from Stripe CLI.           | `whsec_...`                          |

## 3. Local Development & Testing (Mocking)
To avoid using real payment methods during development, we will use Stripe's Test Mode and the Stripe CLI.

1.  **Use Test Keys:** The `.env.local` file will contain the Stripe **Test Mode** API keys.
2.  **Use Test Cards:** Stripe provides a set of test credit card numbers that can be used in the checkout form without incurring real charges.
3.  **Use Stripe CLI for Webhooks:**
    *   Install the Stripe CLI.
    *   Run `stripe login`.
    *   Run the command `stripe listen --forward-to localhost:3000/api/webhooks/stripe`.
    *   This will provide a webhook signing secret (`whsec_...`) to be placed in `.env.local`. This allows Stripe's test events to be securely sent to the local development server.

## 4. Secure Webhook Handler
The webhook handler is the most critical part of the integration.

-   **Endpoint:** `POST /api/webhooks/stripe`
-   **Security:** The first step **must** be to verify the `stripe-signature` header using the `STRIPE_WEBHOOK_SECRET`. Reject any request that fails verification.
-   **Logic:** Use a `switch` statement to handle key Stripe events:
    *   `checkout.session.completed`: A user has successfully paid for the first time. Create a `Subscription` record in our database, linking the `userId` to the `stripeCustomerId` and `stripeSubscriptionId`.
    *   `customer.subscription.updated`: A user's subscription has changed (e.g., upgraded, downgraded, or past due). Update the `status` and `stripeCurrentPeriodEnd` in our database.
    *   `customer.subscription.deleted`: A user has canceled their subscription. Update the `status` in our database to `CANCELED`.

## 5. Feature Gating & Access Control
-   **Backend:** The Next.js middleware defined in the `Security_RBAC_Specification.md` will check the user's `Subscription.status`. If the status is not `ACTIVE` or `TRIALING`, it will block access to Pro features.
-   **Frontend:** A React hook (e.g., `useSubscription()`) will provide the user's subscription status to UI components, allowing them to conditionally render "Upgrade" prompts or "Pro" badges.