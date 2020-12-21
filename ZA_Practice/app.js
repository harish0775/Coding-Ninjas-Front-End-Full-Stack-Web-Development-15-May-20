
const express = require('express');
const cookieParser = require('cookie-parser');
console.log("MAIN INDEX LOADED : Sucessfully");
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passports');
const passportLocal = require('./config/passport-local-strategy');
const mongoStore = require('connect-mongo')(session);

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(passport.setAuthenticatedUser);
// use express router
app.use('/', require('./routes'));

// set up the view engineno
app.set('view engine', 'ejs');
app.set('views', './views');
//mongo store is used to store the  session cookie in the db
// app.use(session({
//     aname : 'codieal',
//     secret : 'something',
//    resave : false,
//     saveUninitialized:false,
//    cookie:{
//        maxAge : (100*60*100)
//    },
//    store : new mongoStore({
//        {
//            mongooseConnection :db
//        }
//    })

// }));
app.use(passport.nitialized())
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});

