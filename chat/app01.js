var app = require('http').createServer(resposta);
app.listen(3000);
console.log("Aplica��o est� em execu��o...");
function resposta (req, res) {
     res.writeHead(200);
     res.end("Servidor em WAIT.");
}