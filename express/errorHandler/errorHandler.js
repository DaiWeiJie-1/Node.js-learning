var express = require('express');
var app = express();

app.get('/user/:id',function(req,res,next){
    
    if(req.params.id === -1){
        err.status = 404;
        next(new Error('not fount'));
    }else{
        console.log('user');
        res.sent('user');
    }
});

app.use(function(error,req,res,next){
    console.log('error');
    res.status(error.status);
    res.send('error');
});

app.listen(8088);