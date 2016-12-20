/// <reference path="./typings/index.d.ts" />
var dgram = require('dgram');

var clientSocket = dgram.createSocket('udp4');

clientSocket.bind(55555,function(){
    console.log(clientSocket.address().address + ":" + clientSocket.address().port);
    clientSocket.setBroadcast(true);
});

var message = new Buffer('Hi,This is my broadCast');
console.log('send msg');
clientSocket.send(message,0,message.length,41234,'255.255.255.255',function(error,bytes){
    console.log('error : '+ error);
    // clientSocket.close();
});

clientSocket.on('message',function(msg,rinfo){
    console.log('client :' + msg + ";from " + rinfo.address + ":" + rinfo.port);
});

