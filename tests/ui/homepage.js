import { browser } from "k6/browser";
import { HomePage } from "../../pages/home.page.js";

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

  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.search("fish");


  await page.close();
}
