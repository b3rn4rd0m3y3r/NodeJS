var app = require('http').createServer(resposta);
var fs = require('fs');

//app.listen(3000);
app.listen(process.env.PORT);
console.log("Aplicação está em execução...");

function resposta (req, res) {
     fs.readFile(__dirname + '/exemplo.html',
     function (err, data) {
         if (err) {
              res.writeHead(500);
              return res.end('Erro ao carregar o arquivo exemplo.html');
		}

         res.writeHead(200, {'Content-Type': 'text/html'});
         data += __dirname;
         res.end(data);
     });
     console.log(__dirname);
}