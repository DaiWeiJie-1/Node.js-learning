'use strict'
var fs = require('fs');
var data = 'Hello,Node.js,hello2';
fs.writeFile('output.txt',data,function(err){
    if(err){
        console.log('error');
    }else{
        console.log('ok');
    }
});