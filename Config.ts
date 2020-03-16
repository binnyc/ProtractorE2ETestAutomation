import { browser, Config } from "protractor";
var HtmlReporter = require('protractor-beautiful-reporter');

//Firefox
const Firefox = {
  browserName: 'firefox',
  'moz:firefoxOptions': {
    args: ['--headless', '--start-maximized', '--window-size=1400,1080', '--private'],
  },
};

//Chrome
const Chrome = {
  browserName: 'chrome',
  chromeOptions: {
    args: ["--window-size=1400,1080"]
  }
};

//Internet Explorer
const IE = {
  'browserName': 'internet explorer',
};

export let config: Config = {
 directConnect: true, // -- Disabled as directConnect is not support for IE
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [Chrome],

  // Framework to use is Jasmine.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory where protractor is called.
  //specs: ['../tempOutput/Specs/*.js'],

  suites: {
    TC0001: ['../tempOutput/Testcases/TC0001.js'],
    TC0002: ['../tempOutput/Testcases/TC0002.js'],
    TC0003: ['../tempOutput/Testcases/TC0003.js'],
    TC0004: ['../tempOutput/Testcases/TC0004.js'],
    TC0005: ['../tempOutput/Testcases/TC0005.js'],
    OcSpecificTest: ['../tempOutput/Testcases/TC0002.js']
  },

  onPrepare: async () => {
    await browser.driver.get(browser.params.baseURL);
    await browser.driver.manage().window().maximize();
    await browser.manage().timeouts().implicitlyWait(60000);
    browser.ignoreSynchronization = true;

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'Results/Testresults'
    }));

    // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'Results',
      docTitle: 'Binz Web UI Test Automation Results',
      takeScreenShotsOnlyForFailedSpecs: true,
      consolidate: true,
      consolidateAll: true,
      docName: 'WebAutomationTestReport.html',
      gatherBrowserLogs: true,
      clientDefaults: {
        columnSettings: {
          displayTime: true,
          displayBrowser: true,
          displaySessionId: false,
          displayOS: false,
          inlineScreenshots: false,
          warningTime: 4000,
          dangerTime: 6000
        }
      },
    }).getJasmine2Reporter());
  },

  afterEach: async () => {
    await browser.close();
  },

  // Section to define custom parameters
  params:
  {
    baseURL: 'http://www.helpingtesters.com/practice/protractor/index.php',
    login: {
      defaultUserID: 'Vaibhav',
      defaultPassword: 'HelpingTesters',
    }
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000
  }
};