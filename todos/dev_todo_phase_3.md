# Phase 3: Monetization & Administration

## Stripe Subscription Integration
- [ ] **Task 1: Configure Stripe API keys**
    - **LLM Prompt:** "Add Stripe secret and public keys to environment variables and create TypeScript types for Stripe configuration"
    - **Verification:** Stripe SDK can be initialized with env vars

- [ ] **Task 2: Implement subscription checkout flow**
    - **LLM Prompt:** "Create Stripe checkout page with plan selection and payment form"
    - **Verification:** Users can complete checkout and get success/cancel pages

- [ ] **Task 3: Handle Stripe webhooks**
    - **LLM Prompt:** "Create API endpoint to handle Stripe subscription events (created, renewed, canceled)"
    - **Verification:** Webhook events update user subscription status in DB

- [ ] **Task 4: Create subscription management UI**
    - **LLM Prompt:** "Build user profile section to view/update/cancel subscriptions"
    - **Verification:** Users can manage their active subscriptions

## Admin Dashboard
- [ ] **Task 5: Create admin layout component**
    - **LLM Prompt:** "Build AdminLayout component with navigation sidebar and content area"
    - **Verification:** Consistent admin layout renders across pages

- [ ] **Task 6: Implement admin route protection**
    - **LLM Prompt:** "Create ProtectedAdminRoute component that checks user role"
    - **Verification:** Non-admin users get redirected from admin pages

- [ ] **Task 7: Build user management interface**
    - **LLM Prompt:** "Create admin user list with search, filters and role editing"
    - **Verification:** Admins can search and modify user roles

## Content Management System
- [ ] **Task 8: Develop node editor**
    - **LLM Prompt:** "Create rich text editor for node content with title/tags/status"
    - **Verification:** Admins can create/edit node content

- [ ] **Task 9: Build roadmap management**
    - **LLM Prompt:** "Create interface to organize nodes into roadmaps with drag-and-drop"
    - **Verification:** Roadmaps can be structured visually

- [ ] **Task 10: Implement content moderation**
    - **LLM Prompt:** "Add reporting system and admin moderation queue"
    - **Verification:** Reported content appears in moderation queue