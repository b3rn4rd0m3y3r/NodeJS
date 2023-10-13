// Count documents in a collection
const express = require("express");
var client = null; 
var databasesList = null;
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.get('/',function(){
	console.log('Caminho /');
	});

app.get('/conn',function(){
	console.log('Caminho /conn');
	client = new MongoClient("mongodb://localhost:27017");
	console.log(client);
	client.connect();
	});

app.get('/list',function(){
	console.log('Caminho /list');
	console.log(client);
	databasesList = client.db('').admin().listDatabases();
	console.log(databasesList);
	});

app.get('/readlist',function(){
	console.log('Caminho /readlist');
	console.log(databasesList);
		for( db in databasesList.databases ){
			console.log(databasesList.databases[db].name);
			}
	});
	
app.listen(3000,function(){
	console.log('Server na porta 3000.');
	});