'use strict';

const express = require('express');
const path = require('path');
const favicon = require('static-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log = require('../log');
const dotenv = require('dotenv');
dotenv.load();
//const auth = require('./routes/auth');
const api = require('./routes/webcast-api');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const app = express();
const db = require('./../models/db');

//middleware
app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//routes
//app.use('/login', auth);
app.use('/api', api);

//Server start
app.set('port', PORT);

var server = app.listen(app.get('port'), function () {
    log('Express server listening on port ' + server.address().port);
});


module.exports = app;


//app.listen(PORT, () => console.log(`Listening on ${PORT}`));
