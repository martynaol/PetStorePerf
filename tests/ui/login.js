import { browser } from "k6/browser";
import { LoginPage } from "../../pages/login.page.js";

export const options = {
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

export default async function () {
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login("auto_test", "zaq123WSX!@#");

  await page.close();
}
