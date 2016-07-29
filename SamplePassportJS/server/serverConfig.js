var globalSettings = require('../props.json');

module.exports = {
    Server: function (app){
        // start the server
        var port = globalSettings.SERVER_PORT || 8000;
        app.listen(port, function(){
            console.log('Server is running on port ' + port);
        });
    }
};
