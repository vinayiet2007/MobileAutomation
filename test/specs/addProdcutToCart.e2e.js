const productPage = require("../pageobjects/product.page");
const commonPage = require("../pageobjects/common.page");
const cartPage = require("../pageobjects/cart.page");

describe("My First Test", () => {
    beforeEach(async() => {
        await commonPage.openCatalogPage();
    });
    it("Total Product Price match to no of product added", async () => {
            const productNames = ["Sauce Labs Backpack","Sauce Labs Bike Light","Sauce Labs Bolt T-Shirt"];
            let price = 0;
            for(const productName of productNames){
                await productPage.clickProduct(productName);
                const productPrice = await productPage.getProductPrice();
                console.log("Price Product ===>*** ",productPrice);
                price += productPrice;
                await productPage.addProductToCart();
                await commonPage.openCatalogPage();
            }
            await commonPage.openCartPage();
            totalPrice = await cartPage.getTotalPrice();
            console.log("Total Price ===>*** ",price);
            expect(totalPrice).toEqual(price);
            totalItems = await cartPage.getTotalItems();
            console.log("Total Products ===>*** ",totalItems);
            expect(totalItems).toEqual(productNames.length);
        });
    });