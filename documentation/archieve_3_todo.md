Excellent point. This is a critical detail for moving from architecture to real-world implementation. A robust payment system requires a clear distinction between testing and production environments, and this must be reflected in our core documentation.

You are right to identify this gap. We will now refine the existing documents to create a production-grade plan for Stripe integration. This involves specifying environment variables, local testing procedures with mocking, and how the subscription status translates into access control.

Here is the comprehensive plan to update the necessary documents.

---

### **Refinement Plan: Production-Ready Stripe Integration**

I will now outline the necessary updates to our SDLC documents. Then, I will provide a new `todo.md` file for your 4B LLM to execute these refinements.

#### **1. Updates to `docs/architecture/Database_Schema.prisma`**

The `Stripe_Subscription_Implementation_Plan.md` proposed a `Subscription` model. We will now officially integrate it and refine it.

**Action:** Add the `Subscription` model and link it to the `User` model.

```prisma
// Add to the bottom of the file

model Subscription {
  id                 String   @id @default(cuid())
  userId             String   @unique
  user               User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  stripeCustomerId      String   @unique
  stripeSubscriptionId  String?  @unique
  stripePriceId         String?
  stripeCurrentPeriodEnd DateTime?

  status             SubscriptionStatus @default(INCOMPLETE)

  @@index([userId])
}

enum SubscriptionStatus {
  ACTIVE
  CANCELED
  INCOMPLETE
  PAST_DUE
  TRIALING
}

// Add to the User model
model User {
  // ... existing fields
  subscription   Subscription?
}
```

#### **2. Updates to `documentation/Stripe_Subscription_Implementation_Plan.md`**

This document will be significantly enhanced with environment details and webhook logic.

**Action:** Replace the existing content with this more detailed version.

```markdown
# Stripe Subscription Implementation Plan for Project Nexus
**Version:** 2.0 (Refined)
**Date:** [Current Date]

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
```

#### **3. Updates to `docs/architecture/Security_RBAC_Specification.md`**

We need to connect the abstract concept of a "pro role" to the concrete `Subscription.status`.

**Action:** Update Section 1.1 "Middleware Logic" to be more specific.

```typescript
// Update in docs/architecture/Security_RBAC_Specification.md

// ...
### 1.1 Next.js Middleware Implementation
// ...
- **Middleware Logic**:  
  ```typescript
  import { getUserWithSubscription } from 'lib/auth'; // Hypothetical function

  export async function middleware(request: NextRequest) {
    const { user, subscription } = await getUserWithSubscription(request);

    // Redirect unauthenticated users from protected routes
    if (!user && (request.nextUrl.pathname.startsWith('/pro') || request.nextUrl.pathname.startsWith('/admin'))) {
      return NextResponse.redirect('/login');
    }

    // Check for Pro subscription status
    if (request.nextUrl.pathname.startsWith('/pro') && subscription?.status !== 'ACTIVE') {
      return NextResponse.redirect('/upgrade'); // Redirect to pricing/upgrade page
    }

    // Check for Admin role
    if (request.nextUrl.pathname.startsWith('/admin') && user?.role !== 'ADMIN') {
        return new Response('Forbidden', { status: 403 });
    }
    
    return NextResponse.next();
  }
  ```
```

---

### **The Updated `todo.md` for LLM Execution**

This new plan is clear, actionable, and ensures all related documents are updated consistently.

```markdown
# Refinement Phase 2: Stripe Integration Todo List

**Objective:** To update all relevant SDLC documents with a production-ready plan for Stripe subscription integration, including environment management and local testing.

---

- [ ] **1. [Database] Update the Database Schema**
    - **Action:** Edit the `docs/architecture/Database_Schema.prisma` file.
    - **Details:**
        - Add the new `Subscription` model as specified in the refinement plan.
        - Add the new `SubscriptionStatus` enum.
        - Add the `subscription Subscription?` relation to the `User` model.
    - **Source:** Refinement Plan, Section 1.

- [ ] **2. [Architecture] Overhaul the Stripe Implementation Plan**
    - **Action:** Replace the entire content of `documentation/Stripe_Subscription_Implementation_Plan.md` with the new, detailed Version 2.0 content.
    - **Details:** Ensure the new content includes sections on Environment Variables, Local Development with Stripe CLI, and Secure Webhook Handling.
    - **Source:** Refinement Plan, Section 2.

- [ ] **3. [Security] Refine the Access Control Middleware**
    - **Action:** Edit the `docs/architecture/Security_RBAC_Specification.md` file.
    - **Details:** Update the TypeScript code snippet for the middleware logic to specifically check for `subscription.status === 'ACTIVE'`, as detailed in the refinement plan.
    - **Source:** Refinement Plan, Section 3.

- [ ] **4. [Project Management] Update the MVP Task Breakdown**
    - **Action:** Edit the `project_management/MVP_Task_Breakdown.md` file.
    - **Details:** Add a new top-level section for "Stripe & Monetization" with the following granular tasks:
        - `[ ] [Infra] Add all Stripe environment variables to Vercel and .env.example`
        - `[ ] [Backend] Create API route for Stripe webhook handler with signature verification`
        - `[ ] [Backend] Create API route to create a Stripe Checkout session`
        - `[ ] [UI] Build the pricing/upgrade page`
        - `[ ] [UI] Build the Stripe Checkout redirect flow`
        - `[ ] [Feature] Implement the 'useSubscription' hook for frontend feature gating`
    - **Source:** General task breakdown based on the refined Stripe plan.
```