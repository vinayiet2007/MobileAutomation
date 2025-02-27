const { $ } = require('@wdio/globals');
const helper = require('./helper.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CommonPage {
    /**
     * define selectors using getter methods
     */

    async openCatalogPage(){
        if(driver.isAndroid){
            await this.openMenu();
        }
        const catalogPage = await helper.fetchElement("catalogMenu");
        await catalogPage.click();
    }

    async openMenu(){
        const menu = await helper.fetchElement("menuButton");
        await (menu).waitForExist({ timeout: 5000 });
        await menu.click();
    }

    async openCartPage(){
        const cartPage = await helper.fetchElement("openCartButton");
        await cartPage.click();
    }   
}

module.exports = new CommonPage();
