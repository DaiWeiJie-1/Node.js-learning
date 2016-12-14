var fs = require('fs');

var readStream = fs.createReadStream('strings.xml','utf-8');
var writeStream = fs.createWriteStream('out-string.xml','utf-8');
var objs = {};
readStream.on('data',function(chunk){
    var arry = chunk.split('\n');
    for(var pos in arry){
        var targetStr = arry[pos];
        var firstIndex = targetStr.indexOf('>');
        var endIndex = targetStr.indexOf('</string>')
        if(firstIndex != -1 && endIndex != -1){
            var str = targetStr.substring(firstIndex+1,endIndex);
            var num = objs[str];
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
             console.log(key + ":" + objs[key]);
         }
         writeStream.write(key + "\n");
    }
    writeStream.end();
});

readStream.on('end',function(){
    console.log('end');
});

readStream.on('error',function(error){
    console.log('error' + error);
});
