const fs = require('fs');
const projectPath = require("path");

/**
 * Helper class to fetch elements based on locators defined in a resource file.
 * @class Helper
 */
class Helper {
    /**
     * Fetches an element based on the provided name and optional flag.
     * @param {string} name - The name of the element to fetch.
     * @param {string} [flag=undefined] - An optional flag to replace in the locator.
     * @returns {Promise<WebdriverIO.Element>} - The fetched element.
     * @throws {Error} - Throws an error if the locator type is invalid.
     */
    async fetchElement(name, flag = undefined) {
        // Construct the path to the resource file
        const resourcePath = projectPath.join(process.cwd(), "test/pageobjects/resource.json");
        console.log("Current Working Directory:", process.cwd());

        // Read and parse the locators from the resource file
        const locators = await JSON.parse(fs.readFileSync(resourcePath, 'utf8'));
        const { locatorType, IosLocatorValue, androidLocatorValue } = locators[name];

        // Determine the locator based on the platform (iOS or Android)
        let locator = driver.isIOS ? IosLocatorValue : androidLocatorValue;

        // Replace the flag in the locator if provided
        flag = flag ?? '';
        locator = locator.replace('Flag', flag);

        // Return the element based on the locator type
        switch (locatorType) {
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
