/// <reference path="./typings/index.d.ts" />
var mysql = require('mysql');
var express = require('express');
var app = express();


app.get('/query',function(req,res,next){
    query('select * from student',function(err,rows){
        if(err){
            res.send(err);
        }else{
            res.send(rows);
        }
    })
});

app.get('/insert/:id&:name',function(req,res,next){
    var id = req.params.id;
    var name = req.params.name;
    var sql = 'insert into student (`id`,`name`) values ('+id+',"'+name+'")';
    console.log(sql);
    query(sql,function(err,rows){
        if(err){
            res.send(err);
        }else{
            res.send(rows);
        }
    })
});



app.listen(8089);


var pool = mysql.createPool({
    host:'127.0.0.1',
    database:'mydb',
    port:'3306',
    user:'root',
    password:'900512',
});

function query(sql,callback){
    //获得数据库连接
    pool.getConnection(function(err,connection){
        if(err){
            console.log("GetConnect err : " + err);
        }else{
            connection.query(sql,function(err,rows){
                callback(err,rows);
                console.log("rows : " + rows);
                connection.release();//释放连接
            })
        }
    });
}


