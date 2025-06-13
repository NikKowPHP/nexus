import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { JSDOM } from 'jsdom';

declare global {
  interface Window {
    // Additional DOM type declarations
    HTMLElement: typeof HTMLElement;
    Node: typeof Node;
    // Dummy property to satisfy ESLint
    _test?: never;
  }
}

expect.extend(matchers);

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});

global.document = dom.window.document;
global.window = dom.window as unknown as (Window & typeof globalThis);
global.navigator = dom.window.navigator;