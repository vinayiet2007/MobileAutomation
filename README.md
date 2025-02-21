# MobileAutomation
IOS + APPIUM + ANDROID + JAVASCRIPT + XCODE + WDIO
#                       ***** IOS ******
## Installation:
1. **Xcode**: Install the latest version of Xcode (or update from the App Store).
2. **Set JAVA_HOME**: Add the following line to your `.zshrc` file to set the `JAVA_HOME` environment variable:
    ```sh
    export JAVA_HOME=$(/usr/libexec/java_home)
    ```
3. **Install Carthage**:
    ```sh
    brew install carthage
    ```
4. **Download and Install Appium Inspector**:
    - [Appium Inspector Releases](https://github.com/appium/appium-inspector/releases)
    - Confirm "Allow Appium" in System Preferences -> Security & Privacy.
5. **Install Appium Globally**:
    ```sh
    npm install -g appium@next
    ```
6. **Install XCUITest Driver**:
    ```sh
    appium driver install xcuitest
    ```
7. **Run Appium Doctor**:
    ```sh
    appium-doctor
    ```
    - If you see the XCUITest driver marked with a red cross, accept the license by running the following command:
    ```sh
    sudo xcodebuild -license
    ```
    - Ensure your Xcode is located at:
    ```sh
    /Applications/Xcode.app/Contents/Developer
    ```
    - If not, set the correct path:
    ```sh
    sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
    ```

## How to Run:
1. **Start Appium**:
    ```sh
    appium
    ```
    - Make sure you use the same port (4723) in Appium Inspector.

2. **Start Xcode and Select/Install Your Desired Simulator**:
    - iPhone 14 Pro
    - iOS 18.2

3. **Open Appium Inspector with the Following Capabilities and Inspect Your Elements**:
    ```json
    {
        "platformName": "iOS",
        "appium:platformVersion": "18.2",
        "appium:deviceName": "iPhone 14 Pro",
        "appium:app": "<your app Path>/MyDemoApp.app",
        "appium:automationName": "XCUITest"
    }
    ```

4. **Run Tests with the Following Command**:
    ```sh
    wdio run config/wdio-ios.conf.js
    ```

## Additional Information:
- **Project Structure**:
    - [specs](http://_vscodecontentref_/1): Contains the test specifications.
    - [pageobjects](http://_vscodecontentref_/2): Contains the page object models.
    - [config](http://_vscodecontentref_/3): Contains the WebdriverIO configuration files.

- **Useful Commands**:
    - **Install Dependencies**:
        ```sh
        npm install
        ```
    - **Run Tests**:
        ```sh
        npx wdio run config/wdio-ios.conf.js
        ```

- **Troubleshooting**:
    - Ensure all dependencies are installed.
    - Verify the paths in the capabilities are correct.
    - Check the Appium server logs for any errors.