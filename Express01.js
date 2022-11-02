 // Arquivo localizado em C:\Ap\Nodejs
 const express = require('express');

 //var app = express.createServer();
 const app = express();

 app.get('/', function (req, res) {
	 var virtualDirPath = process.env.virtualDirPath || '';
     //res.send('Hello0 from root directory '+virtualDirPath);
	 res.send('Hello0 from root directory '+__dirname);
 });
 
 app.get('/node/ex1', function (req, res) {
     res.send('Hello1 from foo! [express sample]');
 });

 app.get('/node/ex2', function (req, res) {
     res.send('Hello2 from bar! [express sample]');
 });

 //app.listen(process.env.PORT);
 app.listen(3008);