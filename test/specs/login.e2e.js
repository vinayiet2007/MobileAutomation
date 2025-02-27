const loginPage = require("../pageobjects/login.page");
const productPage = require("../pageobjects/product.page");
const commonPage = require("../pageobjects/common.page");
const menuPage = require("../pageobjects/menu.page");

describe("Login Test", () => {

    beforeEach(async() => {
        await commonPage.openMenu();
        await menuPage.openLoginPage();
    });

    it("login with valid credentials", async () => {
        await loginPage.login("bob@example.com", "10203040");
        pageTitle = await productPage.getPageTitle();
        expect(pageTitle).toEqual("Products");
    });

    it("login with invalid or no credentials", async () => {
        await loginPage.login("", "");
        errorMessage = await loginPage.getErrorMesssage();
        expect(errorMessage).toEqual("Username is required");
     });
});
