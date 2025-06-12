import { test, expect } from '@playwright/test';

test('GET /api/progress', async ({ request }) => {
  const response = await request.get('/api/progress');
  expect(response.status()).toBe(200);
});