/// <reference path="././typings/index.d.ts" />

var net = require('net');
var client = new net.Socket();
var Host = '127.0.0.1';
var Port = 42222;

client.connect(Port,Host,function(){
    console.log('connected to :' + Host + ':' + Port);
    //建立连接后向服务器发送数据
    client.write('Hi,I am client!');
});


client.on('data',function(data){
    console.log('data:' + data);
    if(data.toString() === 'bye'){
        client.write('bye');
        client.destroy();
    }
});

client.on('close',function(had_error){
    console.log('close : error = ' + had_error );
    if(client.destroyed == false){
        client.destroy();
    }
});

client.on('error',function(err){
    console.log('err:' + err);
});



