import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  console.log(process.env.PLAYWRIGHT_TEST_BASE_URL);


  // Expect a title "to contain" a substring.
  await expect(page.locator('.p-3.text-capitalize')).toHaveText(/you can drag and drop Items : /);
});
