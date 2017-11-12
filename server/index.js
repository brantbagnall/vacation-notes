const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    ctrl = require('./middleware/middleware.js'),
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
    const db = app.get('db');
    db.find_user([profile._json.identities[0].user_id]).then(user => {
        if(user[0]){
            return done(null, user[0].user_id);
        } else {
            db.create_user([profile._json.given_name, profile._json.family_name, profile._json.email, profile._json.picture, profile._json.identities[0].user_id, profile._json.given_name]).then( user => {
                return done(null, user[0].user_id);
            });
        }
    });
    
}))
passport.serializeUser(function(id, done){
    done(null, id);
})
passport.deserializeUser(function(id, done){
    app.get('db').find_session_user([id]).then( user => {
        done(null, user[0]);
    });
})

app.get('/auth/profile', ctrl.authProfile)

app.get('/auth0', passport.authenticate('auth0'));

app.get('/auth0/callback', passport.authenticate('auth0', {
    successRedirect: '/#/profile',
    failureRedirect: '/auth0'
}))

app.get('/logout', ctrl.logOut);

app.put('/editprofile', ctrl.editProfile);

app.post('/api/postjournal', ctrl.postJournal);

app.get('/api/findrecent', ctrl.find_recent);

app.get('/api/findbest', ctrl.find_best);

app.get('/api/findjournal/:id', ctrl.findJournal);

app.get('/api/allbest/', ctrl.allBest);

app.get('/api/allrecent/', ctrl.getAllRecent);






const path = require('path')
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, ()=> console.log('Listening on port: ' + port + ' Unix Time: ' + Date.now()));