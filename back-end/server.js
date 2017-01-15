// components
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// controllers
var auth = require('./controllers/auth');
var message = require('./controllers/message');

// local services
var cors = require('./services/cors');
var checkAuthenticated = require('./services/checkAuthenticated')

//middleware
app.use(bodyParser.json());
app.use(cors);

//functions are first-class objects
app.get('/api/message', message.get);
app.post('/api/message', checkAuthenticated, message.post);
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);

mongoose.connect("mongodb://localhost:27017/test", function (err, db) {
    if (!err) {
        console.log("We are connected to MongoDB via mongoose.");

    } else {
        console.log("Failed to connect to NongoDB.");
    }
})

var server = app.listen(5000, function () {
    console.log('Listening on port ', server.address().port);
})