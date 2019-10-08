import puppeteer from 'puppeteer';

async function screenshot () {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1024, height: 800})
  await page.goto('https://www.npmjs.com/package/puppeteer-core');
  await page.screenshot({path: 'example.png'});
  await browser.close();
}

screenshot();