// server.js

// BASE SETUP
// =============================================================================

var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); // connect to our database

var Bear     = require('./app/models/bear');

var express 	=	require('express');
var app		=	express();
var bodyParser	=	require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;


var router = express.Router();


router.get('/', function(req, res) {
	res.json({ message: 'welcome api!' });
});


app.listen(port);
console.log('Magic happens on port'  + port); 
