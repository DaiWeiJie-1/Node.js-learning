var express = require('express');
var app = express();

app.get('/user/:id',function(req,res,next){
    console.log('line 5');
    if(req.params.id == 0){
        //调用剩余中间件,调到下一个路由
        next('route');
    }else{
        next();
    }
},function(req,res,next){
    res.send('second function');
});

app.get('/user/:id',function(req,res,next){
    res.send('next route');
});

app.listen(8088);



