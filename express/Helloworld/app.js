var express = require('express');
var app = express();
var crypt = require('crypto');

/**
 * 设置跨域访问CROS
 */
app.all("*",function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    console.log("set Header");
    next();
});

app.get('/',function(req,res){
    res.send('Hello world!');
});

var server = app.listen(8088,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening at http://%s:%s",host,port);
});