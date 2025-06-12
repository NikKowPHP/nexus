# Revised Dependency Conflict Resolution Plan (Attempt 2)

## Root Cause Analysis
The primary root cause of the previous deployment failure was an `EBADENGINE` warning during `npm install` in the production environment, indicating a Node.js version incompatibility. `eslint-plugin-storybook@9.0.8` explicitly requires Node.js `>=20.0.0`, but the production environment (Vercel) is running `v18.19.1`. The previous `FIX_PLAN.md` did not address this Node.js version mismatch.

## Resolution Strategy
We will resolve dependencies and deployment issues by:
1.  Ensuring the project explicitly declares Node.js 20.x compatibility.
2.  Re-attempting Storybook and ESLint updates.
3.  Removing the conflicting `@visx/zoom` and installing a compatible alternative.
4.  Updating Stripe dependencies.
5.  Updating code to use the new zoom library.
6.  Thoroughly testing the payment flow.

## Implementation Plan

- [x] **Task 1: Update Node.js engine in package.json**
    - **Context:** The current working directory **must** be `project-nexus/apps/web`.
    - **LLM Prompt:** "Modify `project-nexus/apps/web/package.json` to add an `engines` field specifying `node: ">=20.0.0"`."
    - **Verification:** `project-nexus/apps/web/package.json` contains `"engines": { "node": ">=20.0.0" }`.

- [ ] **Task 2: Update Storybook ecosystem**
    - **Context:** The current working directory **must** be `project-nexus/apps/web`.
    - **Command:** `npm install storybook@9.0.8 eslint-plugin-storybook@9.0.8 --legacy-peer-deps`
    - **Verification:** `project-nexus/apps/web/package.json` shows updated versions for `storybook` and `eslint-plugin-storybook`.

- [ ] **Task 3: Remove conflicting visx/zoom**
    - **Context:** The current working directory **must** be `project-nexus/apps/web`.
    - **Command:** `npm uninstall @visx/zoom`
    - **Verification:** `project-nexus/apps/web/package.json` no longer contains `@visx/zoom`.

- [ ] **Task 4: Install zoom alternative**
    - **Context:** The current working directory **must** be `project-nexus/apps/web`.
    - **Command:** `npm install react-zoom-pan-pinch@4.0.0`
    - **Verification:** `project-nexus/apps/web/package.json` contains `react-zoom-pan-pinch`.

- [ ] **Task 5: Update Stripe dependencies**
    - **Context:** The current working directory **must** be `project-nexus/apps/web`.
    - **Command:** `npm install @stripe/stripe-js@2.0.0 @stripe/react-stripe-js@4.0.0`
    - **Verification:** `project-nexus/apps/web/package.json` shows updated versions for `@stripe/stripe-js` and `@stripe/react-stripe-js`.

- [ ] **Task 6: Update zoom implementation**
    - **Files:**
        - `project-nexus/apps/web/src/components/Roadmap.tsx`
    - **LLM Prompt:** "In `project-nexus/apps/web/src/components/Roadmap.tsx`, replace all imports of `@visx/zoom` with `react-zoom-pan-pinch` and update the component implementation to use `react-zoom-pan-pinch`'s `useControls` hook for zoom and pan functionality. Ensure the component renders correctly with the new library."

- [ ] **Task 7: Test payment flow**
    - **Context:** The current working directory **must** be `project-nexus/apps/web`.
    - **Command:** `npm run dev`
    - **Verification:**
        1. Start dev server.
        2. Complete a test checkout.
        3. Confirm no errors occur during the checkout process.

- [ ] **Task 8: Clean up and reset for autonomous handoff**
    - **LLM Prompt:** "Delete the file `NEEDS_ARCHITECTURAL_REVIEW.md` from the root directory. Delete the file `NEEDS_ASSISTANCE.md` from the root directory."
    - **Verification:** The files `NEEDS_ARCHITECTURAL_REVIEW.md` and `NEEDS_ASSISTANCE.md` no longer exist.