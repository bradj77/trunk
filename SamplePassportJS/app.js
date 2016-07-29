var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    favicon = require('serve-favicon'),
    serverConfig = require('./server/serverConfig.js');


// create express 
var app = express();

// add uses to express
app.use('/libs/', express.static('node_modules\\'));
app.use('/', express.static('web'));

// set the favicon
//app.use(favicon(settings.SERVER_ICON));

// configure and start the server
new serverConfig.Server(app);