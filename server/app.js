var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4000;
var cors = require('cors');
const connectDB = require ('./config/db');


// Conectar a MongoDB
connectDB();

// Required aplication specific custom router module
var itemRouter = require('./src/routes/itemRouter');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function() {
    console.log('Server is running on Port: ', port);
});
