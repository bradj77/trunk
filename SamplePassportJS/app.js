'use strict'

var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    flash = require('connect-flash'),
    passport = require('passport'),
    session = require('express-session'),
    localStrategy = require('passport-local'),
    favicon = require('serve-favicon'),
    serverConfig = require('./server/config.js');

// create express 
var app = express();
require('./config/passport.js')(passport);

// set up our express app
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

// required for passport
//app.use(session({ secret: 'Br@d15dAm@N@ru13R05dAW0r1D'}));
//app.use(passport.initialize());
//app.use(passport.session());

// set up logging request to console and flash messages
app.use(morgan('dev'));
app.use(flash());

app.use('/libs/', express.static('node_modules\\'));
app.use('/', express.static('web'));

// set the favicon
//app.use(favicon(settings.SERVER_ICON));

// configure and start the server
new serverConfig.Server(app, session, passport);