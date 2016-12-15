'use strict';

var express = require('express');
var app = new express();

app.use("/static",express.static('src'));
app.use("/static",express.static('img'));

var server = app.listen(8088,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("host = %s,port = %s",host,port);
});