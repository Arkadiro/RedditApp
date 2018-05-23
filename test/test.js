import puppeteer from "puppeteer";

async function nextPage() {
  const browser = activeBrowserawait = puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8084/kt/');

  await browser.close();

  getPic();
}
