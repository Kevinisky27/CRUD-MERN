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
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function() {
    console.log('Server is running on Port: ', port);
});