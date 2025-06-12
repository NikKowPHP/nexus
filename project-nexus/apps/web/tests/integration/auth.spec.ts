import { test, expect } from '@playwright/test';

test('GET /api/auth/[...nextauth]', async ({ request }) => {
  const response = await request.get('/api/auth/signin');
  expect(response.status()).toBe(200);
});