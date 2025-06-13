## Original Problem:
The original problem was to implement a comprehensive test suite for the project, starting with unit tests for core components. The current task was to create unit tests for the `Button` component.

## Failed Fix Attempt:
The failed fix attempt involved:
1. Updating package.json devDependencies to use compatible versions of testing libraries
2. Renaming jest.setup.ts to vitest.setup.ts and updating vitest.config.ts
3. Updating global type definitions in vitest.setup.ts
4. Adding type support for custom matchers
5. Attempting to run the tests but encountering PostCSS and React plugin errors

## New Error:
Error: @vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201

## Attempts to Fix:
1. Added jsxRuntime: 'classic' to react() plugin in vitest.config.ts
2. Attempted downgrading @vitejs/plugin-react