// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Update Auth Tests for Supabase
import { test, expect } from '@playwright/test';

test('should login with valid credentials', async ({ page }) => {
  await page.goto('/login');
  
  // Fill in the login form
  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('input[type="password"]', 'password123');
  await page.click('button[type="submit"]');

  // Verify successful redirect
  await page.waitForURL('/');
});

test('should show error with invalid credentials', async ({ page }) => {
  await page.goto('/login');
  
  // Fill in with invalid credentials
  await page.fill('input[type="email"]', 'wrong@example.com');
  await page.fill('input[type="password"]', 'wrongpassword');
  await page.click('button[type="submit"]');

  // Verify error message appears
  await expect(page.locator('text=Invalid login credentials')).toBeVisible();
});
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END