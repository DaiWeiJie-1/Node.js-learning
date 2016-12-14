var express = require('express');
var app = express();

//没有挂载路径的中间件,应用的每个请求都会执行到此
app.use(function(req,res,next){
    console.log('time',Date.now());
    //执行下个中间件
    next();
});

//挂载在user目录下的中间件,任何到user的请求都会执行
app.use('/user',function(req,res,next){
    console.log('request type:',req.method);
    next();
});

//挂载在user目录下的中间件,对路由get响应
app.get('/user',function(req,res,next){
    //结束请求
    res.send("user");
});

var server = app.listen(8088,function(){
    var address = server.address().address;
    var port = server.address().port;
    console.log('address = ' + address + "; port = " + port);
});