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

app.use('/', require('./routes/about'));
app.use('/about', require('./routes/about'));
app.use('/edit/', require('./routes/edit'));
app.use('/edit/:id', require('./routes/edit'));
app.use('/add', require('./routes/add'));
app.use('/dele', require('./routes/dele'));
app.use('/dele/:id', require('./routes/dele'));
app.use('/list', require('./routes/list'));

app.listen(port, function(){ 
    console.log(`Listening on port: ${port}!`) 
    console.log(__dirname);
    });
