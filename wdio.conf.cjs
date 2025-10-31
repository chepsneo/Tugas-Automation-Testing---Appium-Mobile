exports.config = {
  runner: 'local',
  specs: ['./test/*.js'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'R9RY80376LR', // device kamu
    'appium:platformVersion': '15',     // versi Android kamu
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'io.appium.android.apis', // hasil dari dumpsys
    'appium:appActivity': '.ApiDemos',             // hasil dari dumpsys
    'appium:noReset': true
  }],

  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
  }]],
  hostname: 'localhost',
  port: 4723,
  path: '/',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  afterTest: async function (_, __, { passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  }
};