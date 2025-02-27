const { $ } = require('@wdio/globals');
const helper = require('./helper.page');
const commonPage = require("../pageobjects/common.page");

class MenuPage {

    get loginPage(){
        return $('//XCUIElementTypeButton[@name="LogOut-menu-item"]');
    }

    async openLoginPage(){
        if(driver.isAndroid){
            const logoutMenu= await helper.fetchElement("logoutMenu");
            await logoutMenu.waitForExist({ timeout: 5000 });
            await logoutMenu.click();
            const logoutButton = await helper.fetchElement("logoutButton");
            await logoutButton.waitForExist({ timeout: 5000 });
            await logoutButton.click();
            const logoutOkButton = await helper.fetchElement("logoutOkButton");
            await logoutOkButton.waitForExist({ timeout: 5000 });
            await logoutOkButton.click();
            await commonPage.openMenu();
        }
        const loginPage= await helper.fetchElement("loginMenu");
        await loginPage.waitForExist({ timeout: 5000 });
        await loginPage.click();
    }
}

module.exports = new MenuPage();