'use strict'

module.exports = function(app, passport){

    // LOGIN
    app.get('/login', function(req, res){
        res.send('im in');
    });

    // PROFILE
    app.get('/profile', isLoggedIn, function(req, res){
        res.send('here is your profile');
    });

    // LOGOUT
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
};

//  middleware to make sure the user is logged in
//  else redirect to main page
function isLoggedIn(req, res, next){
    if (req.isAuthenticated())
        return next();
    // redirect if not logged in
    console.log('*** not logged in ***');    
    res.redirect('/');    
}