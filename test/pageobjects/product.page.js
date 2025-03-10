const { $ } = require('@wdio/globals')
const helper = require('./helper.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage {
    /**
     * define selectors using getter methods
     */

    async getPageTitle () {
        const productPageTitle = await helper.fetchElement("productPageTitle");
        return productPageTitle.getText();
    }

    async clickProduct(productName){
        const product = await helper.fetchElement("productName",productName);
        await product.waitForExist({ timeout: 5000 });
        await product.click();
    }

    async addProductToCart(){
        const addToCartButton = await helper.fetchElement("addToCartButton");
        await addToCartButton.click();
    }

    async getProductPrice(){
        const productPriceElement = await helper.fetchElement("productPrice");
        await productPriceElement.waitForExist({ timeout: 5000 });
        const productPriceWithDollar = await productPriceElement.getText();
        return parseFloat(productPriceWithDollar.replace('$', ''));
    }
}

module.exports = new ProductPage();
