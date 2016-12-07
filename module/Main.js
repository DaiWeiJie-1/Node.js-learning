
/**
 *  要在模块中对外输出变量,用:  module.exports = variable; 输出的变脸个可以是任意对象,函数等;
 *  要引入其他模块的输出对象,用： var foo = require('other_module');
 * 
 */

//导入同目录下hello模块
var exportMethod = require('./hello');

exportMethod.hello("Main.js");
exportMethod.hi("Main.js");