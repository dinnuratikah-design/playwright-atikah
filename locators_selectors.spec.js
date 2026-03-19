//Instructions for the test:
// 1. Open https://www.saucedemo.com/ and find three different stable locators for the login button.
// 2. Write a locator for the password input that doesn’t use an ID.
// 3. Inspect a dynamic element and create a selector that still works when its ID changes.


const { test, expect } = require('@playwright/test');

test('3 diff stable locator for login', async ({ page }) => {
  // 1. Navigate to login page
  await page.goto('https://www.saucedemo.com');

  // 2. Click login based on data-test attribute
  await page.locator('[data-test="login-button"]').click();

  // 3. Error message should be visible
  await page.getByText('Epic sadface: Username is required', { exact: true }).isVisible();
  
  // 4. Refresh the page
  await page.reload();

  // 5. Click login based on ID
  await page.locator('#login-button').click();

  // 6. Error message should be visible
  await page.getByText('Epic sadface: Username is required', { exact: true }).isVisible();

  // 7. Refresh the page
  await page.reload();

  // 8. Click login based on playwright built-in role selector
  await page.getByRole('button',{name:'Login'}).click();

  // 9. Error message should be visible
  await page.getByText('Epic sadface: Username is required', { exact: true }).isVisible();

  // 10. Refresh the page
  await page.reload();

});

test('locator for password', async ({ page }) => {
    // 1. Navigate to login page
     await page.goto('https://www.saucedemo.com');

    // 2. Stable selector that doesnt use ID and fill the password
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

});

test('selector by codegen', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

