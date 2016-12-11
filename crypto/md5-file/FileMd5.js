'use strict';
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

var filePath = path.join(path.resolve('.'),'file.txt');
var rs = fs.createReadStream(filePath,'utf-8');
const hash = crypto.createHash('md5');

var startTime = process.hrtime();

rs.on('data',function(chunk){
    console.log(chunk);
    hash.update(chunk);
});

rs.on('end',function(){
    var rest = hash.digest('hex');

    var diffTime = process.hrtime(startTime);
    console.log('end : result = ' + rest + ";time = " + (diffTime[0] +  diffTime[1]/Math.pow(10,9)));
});

rs.on('error',function(err){
    console.log('error:' + err);
});