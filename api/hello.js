const { select } = require('../src/utils');

const chromium = require('chrome-aws-lambda');
const { puppeteer } = require('puppeteer-core');


module.exports = async (req, res) => {

  res.send({ puppeteer });

};
