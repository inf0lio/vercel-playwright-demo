import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.title-text')).toHaveText('Welcome to Todo list page');
});
