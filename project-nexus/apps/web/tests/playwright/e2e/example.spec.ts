import { test, expect } from '@playwright/test';

test('Button component renders correctly in Storybook', async ({ page }) => {
  await page.goto('http://localhost:6006/?path=/story/components-button--primary');
  
  // Wait for Storybook iframe to load
  const storybookFrame = await page.waitForSelector('#storybook-preview-iframe');
  const frame = await storybookFrame.contentFrame();
  
  // Wait for and verify the button with exact text
  await expect(
    frame.getByText('Primary Button')
  ).toBeVisible({ timeout: 10000 });
});