import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page, "/actions/Account.action?signonForm=");

    this.usernameInput = page.locator("input[name='username']");
    this.passwordInput = page.locator("input[name='password']");
    this.loginButton = page.locator("input[type='signon']");
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await Promise.all([
      this.page.waitForNavigation(),
      this.loginButton.click(),
    ]);
  }
}
