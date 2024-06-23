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
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200 // Algunas versiones antiguas de navegadores (IE11, varios SmartTVs) podrían tener problemas con status 204
};

app.use(cors(corsOptions));

// Middleware para agregar manualmente las cabeceras CORS a todas las respuestas
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://shoppr-web-alb-1993009619.us-east-1.elb.amazonaws.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Middleware para registrar todas las solicitudes (opcional, para depuración)
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Required application-specific custom router module
var itemRouter = require('./src/routes/itemRouter');
app.use('/items', itemRouter);

// Start the server
app.listen(port, function() {
    console.log('Server is running on Port: ', port);
});
