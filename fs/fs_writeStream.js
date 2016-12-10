'use strict';
var fs = require('fs');
var writeStream = fs.createWriteStream('output.txt','utf-8');
writeStream.write('newLine!');
writeStream.end();