import { Page, Locator } from "k6/browser";

export class ProductCatalogPage {
  page: Page;
  productList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productList = page.locator(".product-list");
  }

  async goto() {
    await this.page.goto(
      "https://petstore.octoperf.com/actions/Catalog.action"
    );
  }
}
