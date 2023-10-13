// Count documents in a collection
const express = require("express");
var client = null; 
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.get('/',function(){
	console.log('Caminho /');
	});

app.get('/conn',function(){
	console.log('Caminho /conn');
	client = new MongoClient("mongodb://localhost:27017");
	console.log(client);
	});
	
app.listen(3000,function(){
	console.log('Server na porta 3000.');
	});