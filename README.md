# MobileAutomation
IOS + APPIUM + ANDROID + JAVASCRIPT + XCODE + WDIO

#                       ***** Common ******
## Installation:
1. **Set JAVA_HOME**: Add the following line to your `.zshrc` file to set the `JAVA_HOME` environment variable:
    ```sh
    export JAVA_HOME=$(/usr/libexec/java_home)
    ```
2. **Install Carthage**:
    ```sh
    brew install carthage
    ```
3. **Download and Install Appium Inspector**:
    - [Appium Inspector Releases](https://github.com/appium/appium-inspector/releases)
    - IOS ==> Confirm "Allow Appium" in System Preferences -> Security & Privacy.
4. **Install Appium Globally**:
    ```sh
    npm install -g appium@next
    ```

#                       ***** IOS ******
## Installation:
1. **Xcode**: Install the latest version of Xcode (or update from the App Store).
2. **Install XCUITest Driver**:
    ```sh
    appium driver install xcuitest
    ```
3. **Run Appium Doctor**:
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

#                       ***** ANDROID ******
## Installation:
1. **Install Android Studio**:
    - Download and install Android Studio from [Android Studio](https://developer.android.com/studio).
2. **Set ANDROID_HOME**:
    - Add the following lines to your `.zshrc` file to set the `ANDROID_HOME` environment variable:
    ```sh
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```
3. **Install and Configure Android Simulator**:
    - Open Android Studio and create a new AVD (Android Virtual Device).
    - Copy the name of the AVD (important).

4. **Set the Capabilities for Android in Appium Inspector**:
    ```json
    {
        "platformName": "Android", 
        "appium:platformVersion": "12",
        "appium:deviceName": "<AVD name>",
        "appium:app": "<Your App Path>/MyDemoApp.apk",
        "appium:automationName": "UIAutomator2"
    }
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
    wdio run config/wdio-android.conf.js
    ```

## Additional Information:
- **Project Structure**:
    - [specs]: Contains the test specifications.
    - [pageobjects]: Contains the page object models.
    - [config]: Contains the WebdriverIO configuration files.

- **Useful Commands**:
    - **Install Dependencies**:
        ```sh
        npm install
        ```
    - **Run Tests**:
        ```sh
        npx wdio run config/wdio-ios.conf.js
        npx wdio run config/wdio-android.conf.js
        ```

- **Troubleshooting**:
    - Ensure all dependencies are installed.
    - Verify the paths in the capabilities are correct.
    - Check the Appium server logs for any errors.