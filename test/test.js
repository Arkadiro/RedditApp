const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false
  });
    const page = await browser.newPage();
    await page.goto('http://stressmarketing.com/');
    //await page.waitForNavigation({waitUntil: 'load'});
    
    let selector = 'a';
    await page.$$eval(selector, anchors => {
        anchors.map(anchor => {
            if(anchor.textContent == 'Next') {
                anchor.click();
                return
            }
        })
    });
    await page.screenshot({path: 'example.png'});

  await browser.close();
})();
