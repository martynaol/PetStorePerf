"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');
        this.loginButton = page.locator('[name="signon"]');
    }
    async goto() {
        await this.page.goto("https://petstore.octoperf.com/actions/Account.action?signonForm=");
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
exports.LoginPage = LoginPage;
