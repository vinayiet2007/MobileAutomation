const { $ } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage {
    /**
     * define selectors using getter methods
     */
    get pageTitle () {
        return $('//XCUIElementTypeStaticText[@name="title"]');
    }

    get price(){
        return $('//XCUIElementTypeStaticText[@name="Price"]');
    }

    async product(productName){
        return $(`//XCUIElementTypeStaticText[@name="Product Name" and @label="${productName}"]`);
    }

    get addProductToCartButton(){
        return $('//XCUIElementTypeStaticText[@name="Add To Cart"]');
    }

    async getPageTitle () {
        return this.pageTitle.getText();
    }

    async clickProduct(productName){
        const element = await this.product(productName);
        await element.waitForExist({ timeout: 5000 });
        await element.click();
    }

    async addProductToCart(){
        await this.addProductToCartButton.click();
    }

    async getProductPrice(){
        const priceElement = await this.price;
        await priceElement.waitForExist({ timeout: 5000 });
        const productPriceWithDollar = await priceElement.getText();
        return parseFloat(productPriceWithDollar.replace('$', ''));
    }
}

module.exports = new ProductPage();
