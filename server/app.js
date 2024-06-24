const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 4000;
const cors = require('cors');
const connectDB = require ('./config/db');


// Conectar a MongoDB
connectDB();

// Required aplication specific custom router module
var itemRouter = require('./src/routes/itemRouter');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://shoppr-web-alb-766660231.us-east-1.elb.amazonaws.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use(express.static('public'));
var corsOptions = {
    origin: 'http://shoppr-web-alb-766660231.us-east-1.elb.amazonaws.com',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function() {
    console.log('Server is running on Port: ', port);
});