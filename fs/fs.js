'use strict';
var fs = require('fs');

//异步读文件
fs.readFile('file.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//同步读文件
try {
    var data = fs.readFileSync('file.txt','utf-8');
    console.log(data);
} catch (error) {
    console.log(error);
}
