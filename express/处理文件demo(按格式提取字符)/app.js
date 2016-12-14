var fs = require('fs');

var readStream = fs.createReadStream('strings.xml','utf-8');
var writeStream = fs.createWriteStream('out-string.xml','utf-8');
var stringArray = new Array();
readStream.on('data',function(chunk){
    var arry = chunk.split('\n');
    for(var pos in arry){
        var targetStr = arry[pos];
        var firstIndex = targetStr.indexOf('>');
        var endIndex = targetStr.indexOf('</string>')
        if(firstIndex != -1 && endIndex != -1){
            var str = targetStr.substring(firstIndex+1,endIndex);
            console.log(str);
            writeStream.write(str + "\n");
        }
        // console.log('text : ' + arry[pos]);
    }
    writeStream.end();
});

readStream.on('end',function(){
    console.log('end');
});

readStream.on('error',function(error){
    console.log('error' + error);
});
