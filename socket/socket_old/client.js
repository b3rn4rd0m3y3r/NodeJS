var io2 = require('socket.io-client');
var socket2 = io2.connect('http://localhost:8100');

var msg2 = "OLA";
socket2.emit('foo', msg2);