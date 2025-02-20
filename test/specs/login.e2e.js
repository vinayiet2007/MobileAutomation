const loginPage = require("../pageobjects/login.page");
const productPage = require("../pageobjects/product.page");
const commonPage = require("../pageobjects/common.page");
const menuPage = require("../pageobjects/menu.page");

describe("Login Test", () => {

    it("login with valid credentials", async () => {
        await commonPage.openMenu();
        await menuPage.openLoginPage();
        await loginPage.login("bob@example.com", "10203040");
        pageTitle = await productPage.getPageTitle();
        expect(pageTitle).toEqual("title");
    });

    it("login with invalid or no credentials", async () => {
        await commonPage.openMenu();
        await menuPage.openLoginPage();
        await loginPage.login("", "");
        errorMessage = await loginPage.getErrorMesssage();
        expect(errorMessage).toEqual("Username is required");
     });
});