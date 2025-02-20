const { $ } = require('@wdio/globals');

class CartPage{

    get totalPrice(){
        return $('//XCUIElementTypeStaticText[contains(@value,"Total")]//following-sibling::XCUIElementTypeStaticText[contains(@value,"$")]');
    }

    get totalItems(){
        return $('//XCUIElementTypeStaticText[contains(@value,"Total")]//following-sibling::XCUIElementTypeStaticText[contains(@value,"Items")]');
    }

    async getTotalPrice(){
        const totalPriceWithDollar = await this.totalPrice.getText();
        console.log("Total Price is something ===>*** ",totalPriceWithDollar);
        return parseFloat(totalPriceWithDollar.replace('$', ''));
    }

    async getTotalItems(){
        const totalItems =await  this.totalItems.getText();
        return parseInt((totalItems).replace('Items', ''));
    }
}

module.exports = new CartPage();