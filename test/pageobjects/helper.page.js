const fs = require('fs');
const projectPath = require("path");

class Helper{
    async fetchElement(name,flag=undefined){
        const resourcePath = projectPath.join(process.cwd(), "test/pageobjects/resource.json");
        console.log("Current Working Directory:", process.cwd());
        const locators = await JSON.parse(fs.readFileSync(resourcePath, 'utf8'));
        const {locatorType, IosLocatorValue, androidLocatorValue} = locators[name];
        let locator = driver.isIOS ? IosLocatorValue : androidLocatorValue;
        flag = flag ?? ''; 
        locator = locator.replace('Flag', flag);
        switch(locatorType){
            case 'id':
                return $(`~${locator}`);
            case 'xpath':
                return $(locator);
            default:
                throw new Error('Invalid locator type');
        }
    }
}
module.exports = new Helper(); 
