import { test, expect } from "./fixtures/page-test.ts";

test("login page", async ({ loginPage }) => {
  await loginPage.goToIndexPage();
  await loginPage.fillUserInfo("admin", "123456");
  await loginPage.clickLoginButton();

  await expect(loginPage).toHaveURL(/\/member/);
});
