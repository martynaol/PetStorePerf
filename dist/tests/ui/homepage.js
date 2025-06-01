"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.default = default_1;
const browser_1 = require("k6/browser");
const home_page_js_1 = require("../../pages/home.page.js");
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
    const homePage = new home_page_js_1.HomePage(page);
    await homePage.goto();
    await homePage.search("fish");
    await page.waitForTimeout(5000);
    await page.screenshot({ path: "screenshots/search.png" });
    await page.close();
}
