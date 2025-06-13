import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

declare global {
  interface Window {
    // Dummy property to satisfy ESLint - this merges with existing Window type
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