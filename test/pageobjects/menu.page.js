const { $ } = require('@wdio/globals');
const helper = require('./helper.page');

class MenuPage {

    get loginPage(){
        return $('//XCUIElementTypeButton[@name="LogOut-menu-item"]');
    }

    async openLoginPage(){
        const loginPage= await helper.fetchElement("loginMenu");
        await loginPage.waitForExist({ timeout: 5000 });
        await loginPage.click();
    }
}

module.exports = new MenuPage();