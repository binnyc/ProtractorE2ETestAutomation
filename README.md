# Protractor E2E UI TestAutomation
Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.  The framework here is built using Typescript.  Please read through following for details. 

#Project - This is a sample project with demonstrates the code in Typescript using Protractor of different object models (Input fields, dropdowns, options, checkboxes, etc.).  Also, this could be used as a base framework and extended easily based on your needs.  I have used 'http://www.helpingtesters.com/practice/protractor/index.php' website for this project as it has various differnt types of objects to work with.  

#Setup Instructions
#1 Install Visual Studio Code editor - Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). 

To install - Navigate to https://code.visualstudio.com/
- Click download button
- Download the VSCode software package according to your operating system, and install it

#2 Installing Node.js: Node.js® is a JavaScript runtime environment built on Chrome's V8 JavaScript engine.  WebDriverJS has been written in Node.js and Protractor is written on top of WebDriverJS. So, you need NodeJS to enable compilation for Protractor.
To install - Navigate to : https://nodejs.org/en/download/
- Download the package according to your operating system, and install it.
- After the installation is complete, open command prompt and type 'node' and press enter key.  If command prompt does not show any error, then NodeJS has been installed successfully.

#3 Installing Protractor: Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.
To Install - You can install Protractor from the Visual Studio Code itself.
- Launch Visual Studio Code, and click on View -> Integrated Terminal (From top navigation links)
- Type following command (without quotes), and press enter
>> "npm install protractor -g"

#4 Installing Typescript: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. In other words, TypeScript is JavaScript plus some additional features.  Typescript adopts the basic building blocks of your program from JavaScript. Hence, you only need to know JavaScript to use TypeScript. All TypeScript code is converted into its JavaScript equivalent for the purpose of execution.
To Install - You can install Typescript from the Visual Studio Code itself. (Continuation from Install step #3)
- Type following command (without quotes), and press enter
>> "npm install typescript -g"

#5 Installing Jasmine: Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.
To Install - You can install Jasmine from the Visual Studio Code itself. (Continuation from Install step #3)
- Type following command (without quotes), and press enter
>> "npm install jasmine"

#6 We will also need to install "typings" of jasmine and node by executing the following command:
- Type following command (without quotes), and press enter
>> "npm install --save-dev @types/jasmine"
>> "npm install @types/node"

#7 Installing Updates to WebDriver:
- Type following command (without quotes), and press enter
>> "npx WebDriver-manager update"
Note:
NPM - Manages packages but doesn't make life easy executing any.
NPX - A tool for executing Node packages.  NPX comes bundled with NPM starting version 5.2+

#8 Installing IE driver to execute test in IE (this is only needed if you need to run tests using IE browser)
- Type following command (without quotes), and press enter
>> "npx webdriver-manager update --ie"

#9 Install Protractor Beautiful reporting dependencies
- Type following command (without quotes), and press enter
>> "npm install protractor-beautiful-reporter --save-dev"

#10 Start and connect the Selenium server - By default DirectConnect is enabled.  Direct connect is not supported for IE; hence, we you can comment it in the config file and uncomment the seleniumAddress: 'http://localhost:4444/wd/hub',
If you uncomment the selenium address then yo uwill need to start the webdriver server manually. Running following command before executing the tests will start the webdriver server.
>> "webdriver-manager start"

#11 Execute following command to trigger the test execution
>> "npm test" or "npm run test"

#12 To Execute a specific test case execute following command (in the following case, am just running Test case 0005)
>> "tsc && protractor .\\tempOutput\\Config.js --suite=TC0005"
