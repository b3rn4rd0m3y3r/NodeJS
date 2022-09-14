const server = require('http');
const ioIn = require('socket.io')(server);
const ioOut = require('socket.io-client')(server);
ioIn.listen(8100);
//var ioIn = require('socket.io').listen(8100);
//var ioOut = require('socket.io-client');


var socketOut = ioOut.connect('http://localhost:8300');


ioIn.on('connection', function(socketIn) {
  socketIn.on('foo', function(msg) {
    socketOut.emit('bar', msg);
  });
});