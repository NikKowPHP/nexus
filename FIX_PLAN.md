# Fix Plan: Standardize Testing Configuration

- [x] **Task 1: Reorganize test directory structure**
  - **Action:** Create separate directories for unit, integration, and e2e tests
  - **Verification:** Clear separation in `project-nexus/apps/web/tests/`

- [x] **Task 2: Migrate Jest tests to Vitest**
  - **Action:** Update all test files using Jest APIs to Vitest equivalents
  - **Verification:** No `jest` references remain in test files

- [ ] **Task 3: Configure Playwright isolation**
  - **Action:** Ensure Playwright config doesn't interfere with Vitest
  - **Verification:** `npx playwright test` runs only e2e tests

- [ ] **Task 4: Fix path aliases in Vitest config**
  - **Action:** Update `vitest.config.ts` to resolve '@/components' correctly
  - **Verification:** Component imports work in all test files

- [ ] **Task 5: Update NPM scripts**
  - **Action:** Add scripts for `test:unit`, `test:integration`, `test:e2e`
  - **Verification:** Each script runs only its intended test type

- [ ] **Task 6: Clean up and reset for autonomous handoff**
  - **Action:** Delete `NEEDS_ARCHITECTURAL_REVIEW.md`
  - **Verification:** File no longer exists in root directory