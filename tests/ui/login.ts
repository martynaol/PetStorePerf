import { browser } from "k6/browser";
import { Options } from "k6/options";
import { LoginPage } from "../../pages/login.page";

export const options: Options = {
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

export default async function (): Promise<void> {
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("auto_test", "zaq123WSX!@#");

  await page.close();
}
