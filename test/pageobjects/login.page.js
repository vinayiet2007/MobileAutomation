const { $ } = require('@wdio/globals')
const helper = require('./helper.page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    // get inputUsername () {
    //     return $('//XCUIElementTypeStaticText[@name="User Name"]//following-sibling::XCUIElementTypeOther/XCUIElementTypeTextField');
    // }

    // get inputPassword () {
    //     return $('//XCUIElementTypeStaticText[@name="Password"]//following-sibling::XCUIElementTypeOther/XCUIElementTypeSecureTextField');
    // }

    // get loginLabel(){
    //     return $('//XCUIElementTypeStaticText[@name="Select a username from the list below"]');
    // }

    // get btnLogin () {
    //     return $('//XCUIElementTypeButton[@name="Login"]');
    // }

    // get autoLoginLink(){
    //     return $('//XCUIElementTypeStaticText[@name="bob@example.com"]');
    // }

    // get error(){
    //     return $('//XCUIElementTypeStaticText[@name="Username is required"]');
    // }

    // get okButton(){
    //     return $('//XCUIElementTypeButton[@name="OK"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        const autoLoginLink= await helper.fetchElement("autoLoginLink");
        if(username === undefined || password === undefined){
            throw new Error("Username and Password are required");
        }
        const loginButton = await helper.fetchElement("loginButton");
        if(username === "" && password === ""){
            await loginButton.click();
            return;
        }
        // await (await this.inputUsername).setValue(username);
        // await (await this.inputPassword).setValue(password);
        // await driver.hideKeyboard();
        await autoLoginLink.click();
        await loginButton.click();
    }

    async getErrorMesssage(){
        const errorText= await helper.fetchElement("errorText");
        const errorMessage = await errorText.getText();
        const okButton= await helper.fetchElement("okButton");
        await okButton.click();
        return errorMessage;
    }

}

module.exports = new LoginPage();
