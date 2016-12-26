/// <reference path="./typings/index.d.ts" />
var express = require('express');
var app = express();


var array = new Array();
var xiaoming = {
    id:1,
    name:'xiaoming',
    age:13,
};

var xiaohong = {
    id:2,
    name:'xiaohong',
    age:12,
};

var xiaohei = {
    id:3,
    name:'xiaohei',
    age:11,
};

array.push(xiaoming);
array.push(xiaohong);
array.push(xiaohei);

app.all('*',function(req,res,next){
    //设置跨域访问
    res.header("Access-Control-Allow-Origin","*");
    next();
});

app.get('/query',function(req,resp,next){
    resp.send(array);
});

app.post('/insert',function(req,resp,next){
    resp.send('app.insert');
});

app.listen(45555);