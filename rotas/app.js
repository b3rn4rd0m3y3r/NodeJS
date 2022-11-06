var express = require('express');
var app = express();
var port = 3000;
/*
	Chamadas:
	
		http://localhost:3000/
		http://localhost:3000/about
		http://localhost:3000/users
		http://localhost:3000/users/list
*/

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'))

app.listen(port, function(){ 
    console.log(`Listening on port: ${port}!`) 
    console.log(__dirname);
    });
