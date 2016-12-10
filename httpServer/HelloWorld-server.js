'use strict';
var http = require('http');

//创建http server,并传入回调函数
var server = http.createServer(function(req,resp){
    //获得httpqingq的method和url;
    console.log("url : " + req.url + "; method : " + req.method);
    //将http响应200写入resp，同时设置content-Type:text/html
    resp.writeHead(200,{'Content-Type':'text/json'});
    //将http响应的Html内容写入resp;
    resp.end('helloworld({"body":"hello World!"})');
});

//监听本地8088端口
server.listen(8088);

console.log('Server is running at http://127.0.0.1:8088');