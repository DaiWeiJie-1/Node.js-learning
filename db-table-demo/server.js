/// <reference path="./typings/index.d.ts" />
var express = require('express');
var db = require('./dbUtil');
var bodyParse = require('body-parser');
var app = express();


// var array = new Array();
// var xiaoming = {
//     id:1,
//     name:'xiaoming',
//     age:13,
// };

// var xiaohong = {
//     id:2,
//     name:'xiaohong',
//     age:12,
// };

// var xiaohei = {
//     id:3,
//     name:'xiaohei',
//     age:11,
// };

// array.push(xiaoming);
// array.push(xiaohong);
// array.push(xiaohei);

app.all('*',function(req,res,next){
    //设置跨域访问
    res.header("Access-Control-Allow-Origin","*");
    next();
});

/**
 * 解析post的body
 */
app.use(bodyParser.json());
app.use(bodyParse.urlencoded());

app.get('/query',function(req,resp,next){
    console.log('custom ip :' + req.ip);
    db.query(function(data){
        resp.send(data);
    });
});

app.post('/insert',function(req,resp,next){
    //req.body是post参数
    var id = req.body.id;
    var name = req.body.name;
    var age = req.body.age;
    console.log("insert: id = " + id + ", name = " + name + ",age = " + age);
    // db.insert()
    resp.send('app.insert');
});

var server = app.listen(45555,function(){
    console.log("server ip = " + server.address().address);
    console.log("server port = " + server.address().port);
});