'use strict';
var aes = require('./AesUtil');

var str = 'hello world!';

var encrypt = aes.aesEncrypt(str,'123');

console.log("encrypt:" + encrypt);

var decrypt = aes.aesDecrypt(encrypt,'123');

console.log("decrypt:" + decrypt);