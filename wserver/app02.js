var path = require('path');
var app = require('http');
var fs = require('fs');

console.log("Aplicação está em execução...");

app.createServer(function (req, res) {
	
console.log('Request: '+req.url);
console.log('-----------------------------------------');
	
    if(req.url.indexOf('.html') != -1){ //req.url é o pathname, checa se a extensão é '.html'

	fs.readFile(__dirname + req.url, function (err, data) {
        if (err) console.log(err);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
		});

    }

    if(req.url.indexOf('.js') != -1){ //req.url é o pathname, checa se a extensão é  '.js'

	fs.readFile(__dirname + req.url, function (err, data) {
        if (err) console.log(err);
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		res.write(data);
		res.end();
		});
	}

    
	if(req.url.indexOf('.css') != -1){ //req.url é o pathname, checa se a extensão é  '.css'

      //fs.readFile(__dirname + '/css/w3c.css', function (err, data) {
	fs.readFile(__dirname + req.url, function (err, data) {
        if (err) console.log(err);
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.write(data);
		res.end();
		});

    }

}).listen(3000);
