var MongoClient = require('mongodb').MongoClient;

var http = require('http');
	var S = "";
	var W = [];
	var C = 0;
    http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	console.log("Mensagem 0");
	// Connect to MongoDB
	const client = new MongoClient("mongodb://localhost:27017");
 	console.log("Mensagens");
	async function myDatabases(client,res){
		await client.connect();
		databasesList = await client.db().admin().listDatabases();
		var R = "";
		var i = 0;
		C++;
		console.log("myDat"+C.toString());
		console.log("Databases:");
		// Roda a lista de bancos de dados
		for( db in databasesList.databases ){
			res.outputData[i++] = databasesList.databases[db].name;
			//R = R + "<p>" + databasesList.databases[db].name + "</p>";
			console.log(databasesList.databases[db].name);
			}
		S = res.outputData;
		return S;
	};
	// Chamada da função que lista os bancos de dados
	W = myDatabases(client,res).then(function(res){ return res.outputData; });
	console.log(W);
	console.log(S);
	
    res.end('MongoDB data2: [' + JSON.stringify(S) + ', node version is ' + process.version + ']');
}).listen(3000);  

