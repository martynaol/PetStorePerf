import { Page, Locator } from 'k6/browser';

export class HomePage {
  page: Page;
  searchInput: Locator;
  searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#SearchContent input[type="text"]');
    this.searchButton = page.locator('[name="searchProducts"]');
  }

  async goto(): Promise<void> {
    await this.page.goto(
      "https://petstore.octoperf.com/actions/Catalog.action"
    );
  }

  async search(keyword: string): Promise<void> {
    await this.searchInput.fill(keyword);
    await Promise.all([
      this.page.waitForNavigation(),
      this.searchButton.click(),
    ]);
  }
}