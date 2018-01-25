#!/usr/bin/env node


const request = require('request');
const chalk = require('chalk');


request('https://blockchain.info/ticker', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); } 
  console.log(chalk.blue('Buy BTC at :') + chalk.blue.bgGreen.bold(body.INR.last) + chalk.red(' INR and sell at ') + chalk.blue.bgRed.bold(body.INR.sell) + chalk.red(' INR') );
});
