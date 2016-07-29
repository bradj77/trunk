var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    settings = require('./props.json'),
    favicon = require('serve-favicon');

var app = express();

//app.use(favicon(settings.SERVER_ICON));

var port = settings.SERVER_PORT || 8000;

app.listen(port, function(){
    console.log('Server is running on port '+port);
});