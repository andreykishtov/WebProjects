const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const indexRouter = require('./routes/indexRouter.js');

app.use(logger('dev')); //add morgan to express
app.use(bodyParser.json()); //adds body parser to express
app.use(express.static(path.join(__dirname, './view')));

// index router
app.use('/', indexRouter);


module.exports = { server: server, app: app, io: io };