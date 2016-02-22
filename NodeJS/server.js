var express 	= 	require('express');
var app		=	express();

app.get('/', function(req, res){
	res.send('HELLLo LLOVA');
})

var server = app.listen(8081, function(){

	var host	=	server.address().address;
	var port	= 	server.address().port;

	console.warn('Example app listening at Host%s:%s', host, port);
})
