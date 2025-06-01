export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("input[name='username']");
    this.passwordInput = page.locator("input[name='password']");
    this.loginButton = page.locator("input[type='signon']");
  }
  
  async goto() {
    await this.page.goto('https://petstore.octoperf.com/actions/Account.action?signonForm=');
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
