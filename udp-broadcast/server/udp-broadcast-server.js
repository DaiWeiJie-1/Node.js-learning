/// <reference path="./typings/index.d.ts" />
var dgram = require('dgram');


var serverSocket = dgram.createSocket('udp4');

serverSocket.on('error',function(error){
    console.log('server error:\n' + error.stack);
    serverSocket.close();
});

serverSocket.on('message',function(msg,rinfo){
    console.log('server got:' + msg + ";from " + rinfo.address + ":" + rinfo.port);
    var msg = new Buffer('Hi,I received!');
    serverSocket.send(msg,0,msg.length,rinfo.port,rinfo.address,function(err){
        // serverSocket.close();
    })
});

serverSocket.on('listening',function(){
    console.log("server listening: address = " + serverSocket.address().address
    + ":" + serverSocket.address().port);
})

serverSocket.bind(41030);