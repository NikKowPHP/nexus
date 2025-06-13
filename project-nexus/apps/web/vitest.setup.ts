import { JSDOM } from 'jsdom';
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom/vitest';

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});

global.document = dom.window.document;
global.window = dom.window as unknown as Window & typeof globalThis;
global.navigator = dom.window.navigator;

expect.extend(matchers);