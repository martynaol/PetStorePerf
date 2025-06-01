import { Page, Locator } from "k6/browser";

export class LoginPage {
  page: Page;
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[name="username"]');
    this.passwordInput = page.locator('[name="password"]');
    this.loginButton = page.locator('[name="signon"]');
  }

  async goto(): Promise<void> {
    await this.page.goto(
      "https://petstore.octoperf.com/actions/Account.action?signonForm="
    );
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await Promise.all([
      this.page.waitForNavigation(),
      this.loginButton.click(),
    ]);
  }
}
