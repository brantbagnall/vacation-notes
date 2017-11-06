const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    port = 3005;


require('dotenv').config();
const app = express();

app.use(bodyParser.json());

app.use(express.static('build'));

app.use(session({
    secret: process.env.PASS_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
massive(process.env.MASSIVE_STRING).then((db)=>{
    // console.log(db);
    app.set('db', db);
});


passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK
}, function (acessToken, refreshToken, extraParams, profile, done){
    //redo for database
    done(null, profile);
}))
passport.serializeUser(function(profile, done){
    //redo for database
    done(null, profile);
})
passport.deserializeUser(function(profile, done){
    //redo for database
    done(null, profile);
})

app.get('/auth0', passport.authenticate('auth0'));

app.get('/auth0/callback', passport.authenticate('auth0', {
    successRedirect: '/#/',
    failureRedirect: '/auth'
}))

app.listen(port, ()=> console.log('Listening on port: ' + port));