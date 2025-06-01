export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#SearchContent input[type="text"]');
    this.searchButton = page.locator('[name="searchProducts"]');
  }

  async goto() {
    await this.page.goto(
      "https://petstore.octoperf.com/actions/Catalog.action"
    );
  }
  async search(keyword) {
    await this.searchInput.fill(keyword);
    await Promise.all([
      this.page.waitForNavigation(),
      this.searchButton.click(),
    ]);
  }
}
