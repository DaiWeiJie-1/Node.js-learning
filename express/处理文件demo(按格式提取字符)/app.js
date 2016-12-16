var fs = require('fs');
var express = require('express');
var app = express();

var readStream = fs.createReadStream('strings.xml','utf-8');
var noUniqWriteStream = fs.createWriteStream('out-string-no-uniq.xml','utf-8');
var uniqWriteStream = fs.createWriteStream('out-string-uniq.xml','utf-8');
var repeatWriteStream = fs.createWriteStream('out-string-repeat.xml','utf-8');
var uniqKeyWriteStream = fs.createWriteStream('out-string-uniq-key.xml','utf-8');

var androidTxtReadStream = fs.createReadStream('android.txt','utf-8');
var arry3 = {};

var objs = {};
var uniqOjbs = {};

readStream.on('data',function(chunk){
    var arry = chunk.split('\n');
    for(var pos in arry){
        var targetStr = arry[pos];
        var firstIndex = targetStr.indexOf('>');
        var endIndex = targetStr.indexOf('</string>')
        if(firstIndex != -1 && endIndex != -1){
            var str = targetStr.substring(firstIndex+1,endIndex);
            var num = objs[str];
            noUniqWriteStream.write(str + "\n");
            if(num != undefined){
                objs[str] = objs[str]+1;
            }else{
                objs[str] = 1;
            }
        }
    }

    for(var key in objs){
         if(objs[key] > 1){
             //输出内容重复的字段
             
             repeatWriteStream.write(key +" : " + objs[key] + "\n");
         }
         uniqWriteStream.write(key+"\n");
         uniqOjbs[key] = 1;
    }


    var newArry = chunk.split('\n');
    for(var pos in newArry){
        var targetStr = arry[pos];
        var firstIndex = targetStr.indexOf('>');
        var endIndex = targetStr.indexOf('</string>')
        if(firstIndex != -1 && endIndex != -1){
            var str = targetStr.substring(firstIndex+1,endIndex);
            if(uniqOjbs[str] != undefined){
                
                // uniqKeyWriteStream.write(targetStr+"\n");
            }else{
                
            }
        }
    }




    repeatWriteStream.end();
    uniqWriteStream.end();
    noUniqWriteStream.end();

    compareTxt();
});

readStream.on('end',function(){
    console.log('end');
});

readStream.on('error',function(error){
    console.log('error' + error);
});





function compareTxt(){
    androidTxtReadStream.on('data',function(chunk){
        var arry = chunk.split('\n');
        
        for(var pos in arry){
            arry3[arry[pos]] = 1;
        }
        console.log(arry3);
        var tarReadStream = fs.createReadStream('strings.xml','utf-8');

        tarReadStream.on('data',function(chunk){
            var arry = chunk.split('\n');
            
            for(var pos in arry){
                    var targetStr = arry[pos];
                    var firstIndex = targetStr.indexOf('>');
                    var endIndex = targetStr.indexOf('</string>')
                    if(firstIndex != -1 && endIndex != -1){
                        var str = targetStr.substring(firstIndex+1,endIndex);
                        console.log(arry3[str] + "\n");
                        if(arry3[str] != undefined){
                            console.log(targetStr + "\n");
                            uniqKeyWriteStream.write(targetStr + "\n");
                        }else{
                            
                        }
                    }
                }

        });

    });

    androidTxtReadStream.on('end',function(){

    });

    androidTxtReadStream.on('error',function(error){

    });
    
}

