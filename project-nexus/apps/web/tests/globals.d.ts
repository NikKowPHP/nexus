import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

declare global {
  namespace Vi {
    interface Assertion extends TestingLibraryMatchers<HTMLElement, void> {
      // This empty interface extends TestingLibraryMatchers
    }
  }
}