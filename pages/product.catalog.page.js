export class ProductCatalogPage {
    constructor(page) {
        this.page = page;
        this.productList = page.locator(".product-list");
        this.productItems = this.productList.locator(".product-item");
    }
    
    async goto() {
        await this.page.goto("https://petstore.octoperf.com/actions/Catalog.action");
    }
    
    async getProductCount() {
        return await this.productItems.count();
    }
    
    async getProductNames() {
        const productNames = [];
        for (let i = 0; i < await this.getProductCount(); i++) {
        productNames.push(await this.productItems.nth(i).locator("h4").textContent());
        }
        return productNames;
    }
    }