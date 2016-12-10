'use strict';
var fs = require('fs');
var readStream = fs.createReadStream('output.txt','utf-8');
readStream.on('data',function(chunk){
    console.log(chunk);
});

readStream.on('end',function(){
    console.log('end');
});

readStream.on('error',function(err){
    console.log('error' + err);
});