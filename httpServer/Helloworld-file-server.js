'use strict';
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var dir = path.resolve('.');


var server = http.createServer(function(req,resp){
    console.log("url :" + req.url +"; method :" + req.method);
    var pathname = url.parse(req.url).pathname;
    var filePath = path.join(dir,pathname);
    console.log("path = " + filePath);
    fs.stat(filePath,function(err,status){
        if(!err && status.isFile()){
            resp.writeHead(200);
            fs.createReadStream(filePath).pipe(resp);
            console.log('200');
        }else{
            resp.writeHead(404);
            resp.end('404 Not Found');
            console.log('404');
        }
    });
});

server.listen(8088);