module.exports = {
	pegarDataAtual: function() {
		var dataAtual = new Date();
		var dia = (dataAtual.getDate()<10 ? '0' : '') + dataAtual.getDate();
		var mes = ((dataAtual.getMonth() + 1)<10 ? '0' : '') + (dataAtual.getMonth() + 1);
		var ano = dataAtual.getFullYear();
		var hora = (dataAtual.getHours()<10 ? '0' : '') + dataAtual.getHours();
		var minuto = (dataAtual.getMinutes()<10 ? '0' : '') + dataAtual.getMinutes();
		var segundo = (dataAtual.getSeconds()<10 ? '0' : '') + dataAtual.getSeconds();

		var dataFormatada = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo;
		return dataFormatada;
		},
	exitErr: function(err, res) {
		// Exibição pormenorizada do erro
		console.log("ERRO: "+ err.code);
		console.log("ACAO: "+ err.syscall);
		console.log("PATH: " + err.path);
		res.writeHead(200, {'Content-Type': 'text/html;'});
		res.write('<meta charset="utf-8">');
		res.write('<h1>ERRO: ' + err.code + '</h1>');
		res.write('<h2>A&Ccedil;&Atilde;O: ' + err.syscall + '</h2>');
		res.end();	
		}
};