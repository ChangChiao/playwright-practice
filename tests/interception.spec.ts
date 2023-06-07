import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("text exist", async ({ page }) => {
  await page.route("**/status", (route) => {
    console.log("route--", route);
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        status: "success",
      }),
    });
  });
  const alertText = page.locator("#text");
  await expect(alertText).toHaveText(/success/);
});
