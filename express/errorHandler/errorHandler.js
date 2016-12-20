var express = require('express');
var app = express();

app.get('/user/:id',function(req,res,next){
    

    if(req.params.id == -1){
        var err = new Error('404 not found');
        err.status = 404;
        next(err);
    }else{
        console.log('user + ' + req.params.id);
        res.send('user');
    }
});

app.use(function(err,req,res,next){
    console.log('error = ' + err.status);
    res.send(err);
});

app.listen(8088);