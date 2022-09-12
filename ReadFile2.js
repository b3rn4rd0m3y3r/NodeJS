var app = require('http').createServer(resposta);
var fs = require('fs');

app.listen(3000);
console.log("Aplica��o est� em execu��o...");

function resposta (req, res) {
     var arquivo = "";
     if(req.url == "/"){
         arquivo = __dirname + '/index.html';
     }else{
         arquivo = __dirname + req.url;
     }
     fs.readFile(arquivo,
         function (err, data) {
              if (err) {
                   res.writeHead(404);
                   return res.end('P�gina ou arquivo n�o encontrados');
              }

              res.writeHead(200);
              res.end(data);
         }
     );
}