const { $ } = require('@wdio/globals');
const helper = require('./helper.page');

class CartPage{

    async getTotalPrice(){
        const totalPrice = await helper.fetchElement("totalPrice");
        await totalPrice.waitForExist({ timeout: 2000 });
        const totalPriceWithDollar = await totalPrice.getText();
        console.log("Total Price is something ===>*** ",totalPriceWithDollar);
        return parseFloat(totalPriceWithDollar.replace('$', ''));
    }

    async getTotalItems(){
        const totalItemsElement = await helper.fetchElement("totalItems");
        const totalItems = await totalItemsElement.getText();
        return parseInt((totalItems).replace('Items', ''));
    }
}

module.exports = new CartPage();