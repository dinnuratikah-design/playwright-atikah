const { test, expect } = require('@playwright/test');

test('Login with valid credentials', async ({ page }) => {
  // 1. Navigate to login page
  await page.goto('https://www.saucedemo.com/');

  // 2. Enter username
  await page.fill('#user-name', 'standard_user');

  // 3. Enter password
  await page.fill('#password', 'secret_sauce');

  // 4. Click Login
  await page.click('#login-button');

  // 5. Verify dashboard
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});
// to run the test, use the command: npx playwright test tests/login.spec.js --headed