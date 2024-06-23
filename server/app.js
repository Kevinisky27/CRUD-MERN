var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4000;
var cors = require('cors');
const connectDB = require('./config/db');

// Conectar a MongoDB
connectDB();

// Configuración del middleware cors
var corsOptions = {
    origin: 'http://shoppr-web-alb-1993009619.us-east-1.elb.amazonaws.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Required application-specific custom router module
var itemRouter = require('./src/routes/itemRouter');
app.use('/items', itemRouter);

// Manejar solicitudes preflight
app.options('*', cors(corsOptions));

// Start the server
app.listen(port, function() {
    console.log('Server is running on Port: ', port);
});
