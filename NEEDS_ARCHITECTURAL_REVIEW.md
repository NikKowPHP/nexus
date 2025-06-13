## Original Problem:
The Button component tests fail with "document is not defined" errors despite JSDOM setup

## Failed Fix Attempt:
1. Updated dependencies to compatible versions
2. Configured React plugin with jsxRuntime: 'automatic'
3. Initialized JSDOM globals before imports in vitest.setup.ts
4. Removed conflicting type declarations
5. Verified vitest.config.ts has correct jsdom environment setup

## New Error:
Tests still fail with:
```
ReferenceError: document is not defined
 ❯ render project-nexus/apps/web/node_modules/@testing-library/react/dist/pure.js:239:5
 ❯ project-nexus/apps/web/tests/unit/Button.test.tsx:8:5
```

## Configuration Files:
### vitest.config.ts
```ts
export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  }
})
```

### vitest.setup.ts
```ts
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});

global.document = dom.window.document;
global.window = dom.window as unknown as Window & typeof globalThis;
global.navigator = dom.window.navigator;

import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/vitest';
expect.extend(matchers);