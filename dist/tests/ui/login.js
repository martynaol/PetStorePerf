"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.default = default_1;
const browser_1 = require("k6/browser");
const login_page_1 = require("../../pages/login.page");
exports.options = {
    scenarios: {
        ui: {
            executor: "shared-iterations",
            options: {
                browser: {
                    type: "chromium",
                },
            },
        },
    },
    thresholds: {
        checks: ["rate==1.0"],
    },
};
async function default_1() {
    const page = await browser_1.browser.newPage();
    const loginPage = new login_page_1.LoginPage(page);
    await loginPage.goto();
    await loginPage.login("auto_test", "zaq123WSX!@#");
    await page.close();
}
