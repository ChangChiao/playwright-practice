import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly accountInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountInput = page.locator('input[name="account"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole("button", { name: "submit" });
  }

  async fillUserInfo(account: string, password: string) {
    await this.accountInput.fill(account);
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async expectToMemberPage() {
    await expect(this.page).toHaveURL(/\/member/);
  }
}
