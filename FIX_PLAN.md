# Comprehensive Test Infrastructure Fix Plan

## Root Causes Identified
1. **Tooling Conflict**: Playwright tests executed via Vitest runner
2. **Improper Test Organization**: Unit and integration tests mixed
3. **Async Handling**: Missing `act()` in React component tests

## Phase 1: Test Runner Separation

### Task 1: Reconfigure Vitest
```markdown
- [x] **Update Vitest configuration**
  Modify `project-nexus/apps/web/vitest.config.ts` to exclude Playwright tests:
  ```ts
  export default defineConfig({
    test: {
      include: ['tests/unit/**/*.{test,spec}.{js,ts,tsx}'],
      exclude: ['tests/integration/**/*'],
    }
  })
  ```
```

### Task 2: Create Playwright Runner
```markdown
- [x] **Add Playwright test script**
  Update `project-nexus/apps/web/package.json`:
  ```diff
  "scripts": {
    "test:unit": "vitest tests/unit",
    "test:e2e": "playwright test",
    "test": "npm run test:unit && npm run test:e2e"
  }
  ```
```

## Phase 2: Test Organization

### Task 3: Restructure Test Directories
```markdown
- [x] **Create dedicated directories**
  Reorganize tests:
  ```
  tests/
    unit/       # Vitest tests
    e2e/        # Playwright tests
  ```
  Move existing integration tests to `tests/e2e`
```

### Task 4: Update Test Imports
```markdown
- [x] **Fix import paths**
  Update import statements in all test files to reflect new paths
```

## Phase 3: Async Test Fixes

### Task 5: Fix ProtectedRoute Test
```markdown
- [x] **Wrap state updates in act()**
  Modify `tests/unit/protectedRoute.test.tsx`:
  ```tsx
  import { act, render } from '@testing-library/react';
  
  test('renders without crashing', async () => {
    await act(async () => {
      render(<ProtectedRoute><div>Test</div></ProtectedRoute>);
    });
  });
  ```
```

## Phase 4: Validation

### Task 6: Verify Fixes
```markdown
- [x] **Run test suite**
  Execute `npm test` and confirm:
  - All unit tests pass via Vitest
  - All e2e tests pass via Playwright
  - No act() warnings
```

## Mandatory Cleanup

### Task 7: Reset System State
```markdown
- [x] **Clean up signal file**
  - **LLM Prompt:** "Delete NEEDS_ARCHITECTURAL_REVIEW.md from root directory"
  - **Verification:** File removed