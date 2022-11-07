 // Arquivo localizado em C:\Ap\Nodejs
 const express = require('express');

 //var app = express.createServer();
 const app = express();

 //app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 app.post('/form', function (req, res) {
  var retorno = "";
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/html');   
   retorno = req.body;
   console.log(retorno);
   res.send(retorno);
 });
 
 app.listen(3008);