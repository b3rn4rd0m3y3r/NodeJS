const server = require('http');
//const io1 = new server(8300);

const io1 = require('socket.io')(server);
io1.listen(8300);

//var io1 = require('socket.io').listen(8300);

io1.on('connection', function(socket1) {
  socket1.on('bar', function(msg1) {
    console.log(msg1);
  });
});