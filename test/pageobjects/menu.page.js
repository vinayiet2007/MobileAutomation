const { $ } = require('@wdio/globals');

class MenuPage {

    get loginPage(){
        return $('//XCUIElementTypeButton[@name="LogOut-menu-item"]');
    }

    async openLoginPage(){
        const loginButton = this.loginPage;
        await loginButton.waitForExist({ timeout: 5000 });
        await loginButton.click();
    }
}

module.exports = new MenuPage();