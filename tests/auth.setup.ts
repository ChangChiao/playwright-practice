import { test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("/");
  await page.locator('input[name="account"]').click();
  await page.locator('input[name="account"]').fill("admin");
  await page.locator('input[name="account"]').press("Tab");
  await page.locator('input[name="password"]').fill("123456");
  await page.getByRole("button", { name: "submit" }).click();

  await page.waitForURL("/member");

  await page.context().storageState({ path: authFile });
});
