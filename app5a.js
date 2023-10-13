// Count documents in a collection
const express = require("express");
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.get('/',function(){
	console.log('Caminho /');
	});
	
app.listen(3000,function(){
	console.log('Server na porta 3000.');
	});