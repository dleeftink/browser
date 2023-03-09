const { select } = require('../src/utils');

const { puppeteer } = require('puppeteer-core')

module.exports = async (req, res) => {

  res.send({ puppeteer });

};
