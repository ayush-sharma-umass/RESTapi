// Setting up a server and Initializing with basic apps
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to mongoose database
mongoose.connect('mongodb://localhost/cisco');
var db = mongoose.connection;

// Initialize body parser
app.use(bodyParser.json());


// Import the routing files
var itemRouter = require('./routers/itemRouter.js');
app.use('/api',  itemRouter);

// Default uri
app.get('/', function(req, res){
    res.send('Please use /api/items');
});




app.listen(3000);
console.log('Running on port 3000...');
