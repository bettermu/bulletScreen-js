


/*var http = require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type":"text-plain"
    });

    res.write("hello world");
    res.end();
})

server.listen(8080);

console.log("server started");*/


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
app.use('/', express.static(__dirname + "/www"));

server.listen(8080);

io.sockets.on('connection', function (socket) {

    socket.on('msg', function (data) {

        //console.log(data);
        //给所有用户发送消息
        io.sockets.emit('news',data);
        //socket.broadcast.emit('news', data)
        //socket.emit('news', data)
        
    });
    

})


