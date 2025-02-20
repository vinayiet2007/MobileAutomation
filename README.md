# MobileAutomation
IOS + APPIUM + ANDROID + TYPESCRIPT + XCODE + WDIO
## Installation:
    - Xcode-latest (or updated from appstore)
    - Set JAVA_HOME in .zschrc file
    - install   carthage
        -- brew install carthage
    - download and install appium inspector
        -- https://github.com/appium/appium-inspector/releases
        -- Confirm "Allow Appium" in system preferences -> security
    - install appium globaly
        -- npm install -g appium@next
    - install xcuitest
        -- appium driver install xcuitest
    - run appium-dcotor
        -- if you see the xcuitest is marked "red cross", then accept the license by running below command
        -- make sure your xcode is in the below path:
            --- /Applications/Xcode.app/Contents/Developer
            --- else run sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
        -- sudo xcodebuild -license


