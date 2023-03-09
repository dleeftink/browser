const { select } = require('../src/utils');

const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

module.exports = async (req, res) => {
  const executablePath = await chromium.executablePath;

  const browser = await puppeteer.launch({
    executablePath,
    args: chromium.args,
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto(
    'https://data.stackexchange.com/stackoverflow/query/4038/find-interesting-unanswered-questions/'
  );
  const screenshot = await page.screenshot();

  res.send({ screenshot });
};
