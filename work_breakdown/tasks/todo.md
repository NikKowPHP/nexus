### **Part 1: Critical - Audit Failure Remediation (ticket-002)**

**Goal:** Address all outstanding issues identified by the last audit to ensure data integrity and feature completeness.

-   [x] **Task 1.1: Implement API Input Validation for Nodes**
    -   [ ] **Action:** In the `project-nexus/apps/web` directory, run `npm install zod`.
    -   [ ] **Action:** Open `project-nexus/apps/web/pages/api/admin/nodes/[...].ts`.
    -   [ ] **Action:** At the top of the file, import Zod: `import { z } from 'zod';`.
    -   [ ] **Action:** Above the `handler` function, define a Zod schema for creating/updating a Node. It should validate `title` (string, non-empty), `description` (string, non-empty), `type` (enum), and `roadmapId` (string).
    -   [ ] **Action:** In the `POST` case within the `handler`, wrap the `req.body` logic in a `try...catch` block. Use `yourNodeSchema.parse(req.body)` to validate the input. If it fails, return a 400 response with the Zod error.
    -   [ ] **Action:** In the `PUT` case, repeat the validation process using the same Zod schema.

-   [x] **Task 1.2: Implement API Input Validation for Roadmaps**
    -   [ ] **Action:** Open `project-nexus/apps/web/pages/api/admin/roadmaps/[...].ts`.
    -   [ ] **Action:** Import Zod: `import { z } from 'zod';`.
    -   [ ] **Action:** Define a Zod schema for creating/updating a Roadmap, validating `title` (string, non-empty).
    -   [ ] **Action:** In the `POST` case, implement `try...catch` and use the schema to validate `req.body`.
    -   [ ] **Action:** In the `PUT` case, implement `try...catch` and use the schema to validate `req.body`.

-   [x] **Task 1.3: Complete AI Assessment Feedback UI**
    -   [ ] **Action:** Open `project-nexus/apps/web/src/components/AssessmentSubmission.tsx`.
    -   [ ] **Action:** Add new state variables to hold the feedback results: `const [feedback, setFeedback] = useState(null);`, `const [score, setScore] = useState(null);`.
    -   [ ] **Action:** Locate the `handleSubmit` function. Inside the `try` block, after a successful API call, add logic to update these new states with the data from the API response (e.g., `setFeedback(response.data.feedback);`, `setScore(response.data.score);`).
    -   [ ] **Action:** At the top of the file, import the `FeedbackViewer` component: `import FeedbackViewer from './learning/FeedbackViewer';`.
    -   [ ] **Action:** In the JSX at the bottom of the component, add a conditional render block: `{feedback && score && <FeedbackViewer feedback={feedback} score={score} />}`.

-   [ ] **Task 1.4: Correct Security Hardening Documentation**
    -   [ ] **Action:** Open the file `work_breakdown/tasks/4.3_security_hardening.md`.
    -   [ ] **Action:** Locate the line for `Task 3: Add Input Validation to API Endpoints`.
    -   [ ] **Action:** Change the status of this task from `[x]` to `[ ]`.

---

### **Part 2: Feature Completion - Admin Dashboard & CMS (plan-3.2, plan-3.3)**

**Goal:** Build out the remaining Admin and Content Management features that were planned but not fully implemented.

-   [x] **Task 2.1: Implement Content Workflow Status in Schema**
    -   [ ] **Action:** Open `prisma/schema.prisma`.
    -   [ ] **Action:** In the `Node` model, add a new field: `status String @default("DRAFT")`.
    -   [ ] **Action:** In the `Roadmap` model, add a new field: `status String @default("DRAFT")`.
    -   [ ] **Action:** Create a new enum for the status: `enum ContentStatus { DRAFT PUBLISHED ARCHIVED }`. Update the new `status` fields in `Node` and `Roadmap` to use this enum: `status ContentStatus @default(DRAFT)`.
    -   [HUMAN] **Action:** A human operator must run `npx prisma migrate dev --name add_content_status` in the `project-nexus/apps/web` directory to apply this schema change to the database.
    -   [ ] **Action:** Run `npx prisma generate` to update the Prisma Client with the new fields.

-   [x] **Task 2.2: Implement Content Workflow in Node Editor**
    -   [ ] **Action:** Open `project-nexus/apps/web/components/admin/NodeEditor.tsx`.
    -   [ ] **Action:** Add a `<select>` dropdown to the form for the `status` field, with options for "Draft", "Published", and "Archived".
    -   [ ] **Action:** Ensure the `handleChange` and `handleSubmit` functions correctly manage and send the `status` field to the API.
    -   [ ] **Action:** Open `project-nexus/apps/web/pages/api/admin/nodes/[...].ts`. In the `POST` and `PUT` methods, ensure the `status` field from the request body is saved to the database.

-   [x] **Task 2.3: Build Admin Analytics Placeholders**
    -   [ ] **Action:** Create a new component file: `project-nexus/apps/web/components/admin/AnalyticsDashboard.tsx`.
    -   [ ] **Action:** In this new component, add placeholder UI elements for "Total Users", "Active Subscriptions", and a simple bar chart placeholder for "User Growth". Do not implement data fetching logic yet.
    -   [ ] **Action:** Open `project-nexus/apps/web/pages/admin/index.tsx`.
    -   [ ] **Action:** Import and render the new `AnalyticsDashboard` component within the `AdminLayout`.

---

### **Part 3: New Features - Monitoring & Deployment (plan-4.2, plan-4.4)**

**Goal:** Implement the planned monitoring and alerting infrastructure.

-   [ ] **Task 3.1: Instrument Application with Sentry**
    -   [x] The files `instrumentation.ts` and `instrumentation-client.ts` already exist, indicating Sentry SDK is set up. This task is complete.
    -   [HUMAN] **Action:** A human operator needs to create a Sentry project and add the `NEXT_PUBLIC_SENTRY_DSN` to the `.env.local` file and to Vercel environment variables.

-   [ ] **Task 3.2: Create Final Deployment Smoke Test**
    -   [ ] **Action:** Open `project-nexus/apps/web/tests/e2e/auth.spec.ts`.
    -   [ ] **Action:** Add a new test case: `test('should navigate to dashboard and see roadmap after login', async ({ page }) => { ... });`.
    -   [ ] **Action:** Inside this test, after the login steps, add `await page.waitForURL('/dashboard');`.
    -   [ ] **Action:** Add an assertion to check for a key element on the dashboard page, e.g., `await expect(page.locator('h1:has-text("Your Learning Nexus")')).toBeVisible();`.





### The Final Human-in-the-Loop Checklist for Deployment

After your AI signals `IMPLEMENTATION_COMPLETE` and the Auditor passes its final check, a human operator must perform these final steps to go live. The AI cannot and should not do these.

**This is your final "todo" list.**

-   **[HUMAN] Task 1: Environment Variable Configuration**
    -   **Action:** In your Vercel project settings, securely add the production environment variables from `.env.example`.
    -   **Details:** This includes your real `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, and `NEXT_PUBLIC_SENTRY_DSN`. The AI has only worked with placeholder values.

-   **[HUMAN] Task 2: Production Database Migration**
    -   **Action:** Connect to your **production** Supabase instance.
    -   **Action:** Run `npx prisma db push` one last time to ensure the production database schema perfectly matches the final `prisma/schema.prisma` file.

-   **[HUMAN] Task 3: Stripe Production Configuration**
    -   **Action:** In your Stripe Dashboard, switch from "Test mode" to "Live mode".
    -   **Action:** Create the final "Pro Monthly" and "Pro Annual" pricing plans.
    -   **Action:** Create a new production webhook endpoint pointing to your Vercel URL (`https://your-app.vercel.app/api/webhooks/stripe`) and use the new signing secret in your Vercel environment variables.

-   **[HUMAN] Task 4: Final User Acceptance Testing (UAT)**
    -   **Action:** Manually go through the entire application as a new user.
    -   **Checklist:**
        -   [ ] Can you sign up?
        -   [ ] Can you log in?
        -   [ ] Can you view the flagship roadmap?
        -   [ ] Can you subscribe using a real payment method in Stripe's live mode?
        -   [ ] After subscribing, do you get access to premium features?
        -   [ ] Does the "Manage Subscription" button correctly link to the Stripe customer portal?

-   **[HUMAN] Task 5: Go Live!**
    -   **Action:** If all the above steps pass, the project is officially ready for public users. Announce your launch!

---
