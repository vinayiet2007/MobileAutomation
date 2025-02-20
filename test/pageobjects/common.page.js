const { $ } = require('@wdio/globals');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CommonPage {
    /**
     * define selectors using getter methods
     */

    get menu () {
        return $('//XCUIElementTypeButton[@name="More-tab-item"]');
    }

    get cartPage(){
        return $('//XCUIElementTypeButton[@name="Cart-tab-item"]');
    }

    get catalog(){
        return $('//XCUIElementTypeButton[@name="Catalog-tab-item"]');
    }

    async openCatalogPage(){
        await this.catalog.click();
    }

    async openMenu(){
        await (await this.menu).waitForExist({ timeout: 5000 });
        await this.menu.click();
    }

    async openCartPage(){
        await this.cartPage.click();
    }   
}

module.exports = new CommonPage();
