const { select } = require('../src/utils');

const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

module.exports = async (req, res) => {
  const executablePath = await chromium.executablePath;

  const url = new URL(`https://x.x${req.url}`);

  const browser = await puppeteer.launch({
    executablePath,
    args: chromium.args,
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto(url.searchParams.get('site') || 'https://www.wikipedia.org');
  const screenshot = await page.screenshot({
    type: 'png',
  });

  await browser.close();

  res.setHeader('Content-Type', `image/png`);

  res.send({ screenshot });
};
