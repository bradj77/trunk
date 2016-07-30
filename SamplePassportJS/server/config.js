'use strict'

var globalSettings = require('../config/props.json');

module.exports = {
    Server: function (app, session, passport){

        app.set('trust proxy', 1); // trust the first proxy

        // required for passport
        app.use(session({
            //genid: function(req){
            //    return genuuid();
            //},
            secret: globalSettings.PASSPORT_SECRET,
            cookie: {
                httpOnly: true,
                secure: false,
                maxAge: globalSettings.SESSION_TIMEOUT
            },
            resave: true,
            saveUninitialized: true,
            sameSite: 'strict'
        }));
        app.use(passport.initialize());
        app.use(passport.session());

        // set up the routes
        require('../server/routes.js')(app, passport);

        // start the server
        var port = globalSettings.SERVER_PORT || 8000;
        app.listen(port, function(){
            console.log('Server is running on port ' + port);
        });
    }
};


