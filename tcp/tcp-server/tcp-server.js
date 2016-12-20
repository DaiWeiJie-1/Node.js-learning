/// <reference path="././typings/index.d.ts" />

var net = require('net');
var Host = '127.0.0.1';
var Port = 42222;

 var server = net.createServer();
 server.listen(Port,Host);
 var mSocket;

 

 server.on('connection',function(socket){
     console.log('connected:' + socket.remoteAddress + ':' + socket.remotePort);
     socket.on('data',function(data){
         console.log("data : " + data);
         socket.write('bye');
     });

     socket.on('close',function(){
         console.log('close socket');
     });

     socket.on('error',function(err){
         console.log('socket error:' + err);
     });
});

server.on('error',function(err){
    console.log('error:' + err);
})

server.on('close',function(){
    console.log('server close');
})


