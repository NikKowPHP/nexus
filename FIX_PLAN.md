- [x] **Task 1: Update dependencies for compatibility**
  - **LLM Prompt:** "Update package.json devDependencies to use compatible versions:
    - "@vitejs/plugin-react": "^5.0.4"
    - "@testing-library/jest-dom": "^6.4.2"
    - "@testing-library/react": "^14.2.1"
    - Remove all Jest-related dependencies (@types/jest, jest, jest-environment-jsdom, ts-jest)
    - Add @testing-library/jest-dom/vitest as a devDependency"
  - **Verification:** package.json shows updated versions and removed Jest packages

- [x] **Task 2: Configure React plugin in vitest.config.ts**
  - **LLM Prompt:** "Modify vitest.config.ts to explicitly configure the React plugin with jsxRuntime: 'automatic'"
  - **Verification:** vitest.config.ts contains:
    ```ts
    plugins: [react({ jsxRuntime: 'automatic' })]
    ```

- [x] **Task 3: Update vitest.setup.ts with proper imports**
  - **LLM Prompt:** "Update vitest.setup.ts:
    1. Import matchers from '@testing-library/jest-dom/vitest'
    2. Remove unnecessary window type declarations
    3. Ensure proper type casting for global objects"
  - **Verification:** vitest.setup.ts contains:
    ```ts
    import { expect } from 'vitest'
    import * as matchers from '@testing-library/jest-dom/vitest'
    import { JSDOM } from 'jsdom'
    
    expect.extend(matchers)
    
    const dom = new JSDOM('<!doctype html><html><body></body></html>', {
      url: 'http://localhost',
    })
    
    global.document = dom.window.document
    global.window = dom.window as Window & typeof globalThis
    global.navigator = dom.window.navigator
    ```

- [ ] **Task 4: Remove Jest configuration files**
  - **LLM Prompt:** "Delete jest.setup.ts and any other Jest-specific configuration files"
  - **Verification:** jest.setup.ts no longer exists in the project

- [ ] **Task 5: Add Vitest type definitions**
  - **LLM Prompt:** "Create tests/vitest.d.ts with:
    ```ts
    /// <reference types="@testing-library/jest-dom/vitest" />
    ```
    and ensure it's included in tsconfig.test.json"
  - **Verification:** tests/vitest.d.ts exists with correct content

- [ ] **Task 6: Verify test execution**
  - **LLM Prompt:** "Run `npx vitest tests/unit/Button.test.tsx` to verify the test environment is correctly configured"
  - **Verification:** Tests run successfully without preamble errors and all assertions pass

- [ ] **Task 7: Clean up and reset for autonomous handoff**
  - **LLM Prompt:** "Delete the file `NEEDS_ARCHITECTURAL_REVIEW.md` from the root directory"
  - **Verification:** The file `NEEDS_ARCHITECTURAL_REVIEW.md` no longer exists