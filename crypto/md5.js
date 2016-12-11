'use strict';
var crypto = require('crypto');
const hash = crypto.createHash('md5');

hash.update('Hello,world!');
hash.update('Hello,nodejs');

// var hexHashVal = hash.digest('hex');
var base64HashVal = hash.digest('base64');

// console.log("hex:" + hexHashVal);
console.log("base64:" + base64HashVal);