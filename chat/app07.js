var path = require('path');
var app = require('http').createServer(resposta);
// Inclus�o da biblioteca socket
var io = require('socket.io')(app);
var fs = require('fs');
var Iconv = require('iconv-lite');
// Array de usu�rios da sala
var usuarios = [];
// Previs�o da conex�o ao socket pelo cliente
io.on("connection", function(socket){
	// Entrada do cliente
	socket.on("entrar", function(apelido, callback){
			console.log(callback);
			console.log(apelido);
			console.log("Id do Socket:"+socket.id);
			console.log(io._path);
			// Debugando informa��es de clientes
			console.log("No. Clientes: "+io.eio.clientsCount);
			//console.log(io.eio.clients);
			var coll = io.eio.clients;
			var i = 0;
			for( item in coll ){
				++i;
				console.log("CLIENTE [" + i +"]"+coll[item].id);
				}
			console.log('---------------------');
			// Checa se este apelido j� est� na lista de usu�rios
			if(!(apelido in usuarios)){
				socket.apelido = apelido;
				usuarios[apelido] = socket;
				callback(true);
				} else {
				callback(false);
				}
			});
	// Envio de mensagem
	socket.on("enviar mensagem", function(mensagem_enviada, callback){
		console.log(callback);
		mensagem_enviada = "[ " + pegarDataAtual() + " ]: ["  + socket.apelido + "] " + mensagem_enviada;
		console.log(mensagem_enviada);
		io.sockets.emit("atualizar mensagens", mensagem_enviada);
		callback();
     });
});
// Obt�m a data atual
function pegarDataAtual(){
	var dataAtual = new Date();
	var dia = (dataAtual.getDate()<10 ? '0' : '') + dataAtual.getDate();
	var mes = ((dataAtual.getMonth() + 1)<10 ? '0' : '') + (dataAtual.getMonth() + 1);
	var ano = dataAtual.getFullYear();
	var hora = (dataAtual.getHours()<10 ? '0' : '') + dataAtual.getHours();
	var minuto = (dataAtual.getMinutes()<10 ? '0' : '') + dataAtual.getMinutes();
	var segundo = (dataAtual.getSeconds()<10 ? '0' : '') + dataAtual.getSeconds();

	var dataFormatada = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo;
	return dataFormatada;
}

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
	console.log('Request: '+req.url);
	// Extrai de req.url apenas o nome da p�gina ou arquivo, sem os par�metros
	// Se forem fornecidos par�metros, dever�o vir atrav�s de POST
	var arr = (req.url).split("?");
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
