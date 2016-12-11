/**
 * Aes加解密工具
 */
'use strict';
var crypto = require('crypto');
const ALG = "aes-128-ecb";

/**
 * Aes加密
 */
function aesEncrypt(data,key){
    //加密模式还有aes192,aes-256-cbc
    const cipher = crypto.createCipher(ALG,key);
    var crypted = cipher.update(data,'utf8','base64');
    return cipher.final('base64');
}


/**
 * Aes解密
 */
function aesDecrypt(encrypted,key){
    const decipher = crypto.createDecipher(ALG,key);
    var decrypted = decipher.update(encrypted,'base64','utf8');
    return decipher.final('utf8');
}

/**
 * 设置为外部模块,提供加解密方法
 */
module.exports = {
    aesEncrypt:aesEncrypt,
    aesDecrypt:aesDecrypt
}