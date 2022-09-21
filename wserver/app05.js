var path = require('path');
var app = require('http').createServer(resposta);
// Inclus�o da biblioteca socket
var io = require('socket.io')(app);
var fs = require('fs');
var Iconv = require('iconv-lite');
// Devolu��o de sa�da para o cliente com o erro
function exitErr(err, res){
	// Exibi��o pormenorizada do erro
	console.log("ERRO: "+ err.code);
	console.log("ACAO: "+ err.syscall);
	console.log("PATH: " + err.path);
	res.writeHead(200, {'Content-Type': 'text/html;'});
	res.write('<meta charset="utf-8">');
	res.write('<h1>ERRO: ' + err.code + '</h1>');
	res.write('<h2>A&Ccedil;&Atilde;O: ' + err.syscall + '</h2>');
	res.end();	
	}

app.listen(3000);	
	
console.log("Aplica��o est� em execu��o...");
//var iconv = new Iconv('UTF-8','ISO-8859-1');
// Loop do server
function resposta(req, res) {
	// Exibe a URL de requisil��o
	
	// Extrai de req.url apenas o nome da p�gina ou arquivo, sem os par�metros
	// Se forem fornecidos par�metros, dever�o vir atrav�s de POST
	var arr = (req.url).split("?");
	console.log('Request: '+arr[0]);
	console.log('-----------------------------------------');
	// Arquivos de MIME "html"
    if(req.url.indexOf('.html') != -1){ //req.url � o pathname, checa se a extens�o � '.html'
		fs.readFile(__dirname + arr[0], function (err, data) {
			if (err) { 
				exitErr(err, res)
				} else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				res.end();
				}
			});
		}
	// Arquivos de MIME "js"
	if(req.url.indexOf('.js') != -1){ //req.url � o pathname, checa se a extens�o �  '.js'
		fs.readFile(__dirname + req.url, function (err, data) {
		if (err) { 
			exitErr(err, res)
		} else {
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			res.end();
			}
		});
	}
	// Arquivos de MIME "css"
	if(req.url.indexOf('.css') != -1){ //req.url � o pathname, checa se a extens�o �  '.css'
		fs.readFile(__dirname + req.url, function (err, data) {
		if (err) { 
			exitErr(err, res)
			} else {
			res.writeHead(200, {'Content-Type': 'text/css'});
			res.write(data);
			res.end();
			}
		});
	}

}           
