'use strict';
var crypto = require('crypto');
const hash = crypto.createHash('md5');

hash.update('Hello,world!');
hash.update('Hello,nodejs');

//结果用16进制显示
// var hexHashVal = hash.digest('hex');

//结果用base64表示
var base64HashVal = hash.digest('base64');

// console.log("hex:" + hexHashVal);
console.log("base64:" + base64HashVal);