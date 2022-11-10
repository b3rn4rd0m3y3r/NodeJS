var express = require('express');
var app = express();
var port = 3000;
/*
	Chamadas:
	
		http://localhost:3000/
		http://localhost:3000/about
		http://localhost:3000/add
		http://localhost:3000/dele
		http://localhost:3000/edit
		http://localhost:3000/list
*/

app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));

app.listen(port, function(){ 
    console.log(`Listening on port: ${port}!`) 
    console.log(__dirname);
    });
