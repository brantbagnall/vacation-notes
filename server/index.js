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



app.listen(port, ()=> console.log('Listening on port: ' + port));