import { browser } from "k6/browser";
import { Options } from "k6/options";
import { HomePage } from "../../pages/home.page.js";

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

  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.search("fish");
  await page.waitForTimeout(5_000);
  await page.screenshot({ path: "screenshots/search.png" });

  await page.close();
}
