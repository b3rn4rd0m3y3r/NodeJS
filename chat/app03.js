var path = require('path');
var app = require('http');
var fs = require('fs');
var Iconv = require('iconv').Iconv;

console.log("Aplica��o est� em execu��o...");
var iconv = new Iconv('UTF-8','ISO-8859-1');
app.createServer(function (req, res) {
	
	console.log('Request: '+req.url);
	console.log('-----------------------------------------');
	
    if(req.url.indexOf('.html') != -1){ //req.url � o pathname, checa se a extens�o � '.html'

      fs.readFile(__dirname + req.url, function (err, data) {
        if (err) { 
			// Exibi��o pormenorizada do erro
			console.log("ERRO: "+ err.code);
			console.log("ACAO: "+ err.syscall);
			console.log("PATH: " + err.path);
			res.writeHead(200, {'Content-Type': 'text/html;'});
			res.write('<meta charset="utf-8">');
			//res.setEncoding('utf-8');
			res.write('<h1>ERRO: ' + err.code + '</h1>');
			res.write('<h2>A&Ccedil;&Atilde;O: ' + err.syscall + '</h2>');
			//var converted = iconv.convert('<h2>A��O: ' + err.syscall + '</h2>');
			//res.write(converted);
			res.end();
			} else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				res.end();
				}
			});

    }

    if(req.url.indexOf('.js') != -1){ //req.url � o pathname, checa se a extens�o �  '.js'
		fs.readFile(__dirname + req.url, function (err, data) {
        if (err) console.log(err);
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			res.end();
			});
		}

    
	if(req.url.indexOf('.css') != -1){ //req.url � o pathname, checa se a extens�o �  '.css'

      //fs.readFile(__dirname + '/css/w3c.css', function (err, data) {
		fs.readFile(__dirname + req.url, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });

    }

}).listen(3000);
