// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
import puppeteer from "puppeteer";

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    // // const devServer = browser.globals.devServerURL

    // // browser
    // //   .url(devServer)
    // //   .waitForElementVisible('#app', 5000)
    // //   .assert.elementPresent('.hello')
    // //   .assert.containsText('h1', 'Welcome to Your Vue.js App')
    // //   .assert.elementCount('img', 1)
    // //   .end()
    

async function nextPage() {
  const browser = activeBrowserawait = puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8084/kt/');
  
  await browser.close();

  nextPage();
}

  }
}
