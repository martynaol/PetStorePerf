"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCatalogPage = void 0;
class ProductCatalogPage {
    constructor(page) {
        this.page = page;
        this.productList = page.locator(".product-list");
    }
    async goto() {
        await this.page.goto("https://petstore.octoperf.com/actions/Catalog.action");
    }
}
exports.ProductCatalogPage = ProductCatalogPage;
