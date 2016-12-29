/// <reference path="./typings/index.d.ts" />
var express = require('express');
var db = require('./dbUtil');
var bodyParse = require('body-parser');
var app = express();


app.all('*',function(req,res,next){
    //设置跨域访问
    res.header("Access-Control-Allow-Origin","*");
    next();
});

/**
 * 解析post的body
 */
app.use(bodyParse.json());
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
    var student = {};
    student.id = id;
    student.name = name;
    student.age = age;
    console.log("insert: id = " + id + ", name = " + name + ",age = " + age);
    db.insert(student,function(err,array){
        if(err != null){
            var e = new Error(err);
            e.status= 505;
            next(e);
        }else{
            resp.send('app.insert success');

        }
        db.printO(array);
    });
});

app.use(function(err,req,res,next){
    res.status(err.status).send(err.toString());
});

var server = app.listen(45555,function(){
    console.log("server ip = " + server.address().address);
    console.log("server port = " + server.address().port);
});