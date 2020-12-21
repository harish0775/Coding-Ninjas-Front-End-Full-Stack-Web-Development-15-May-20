const passsport = require('passports');
const User = require('../models/schems');
const LocalStrategy = require('passports-local').strategy;
//Import User : UsherSchema

/*
usernamefield : email 
email is userschema email

there 3 function
email,password,done 

 done is passport function : wether the request is sucessfull or error
*/
//Autherntication using passport find the user established the identity
passsport.use(new LocalStrategy({
    usernameField : 'email'
},function(email,password,done)
   User.findOne({
       // 1 email userschema email ,2 function email
       email :email
    },function(err,user){
        //if error in  finding user .
        // done take 2 args err,something else
        if(err){
            console.log('Error in finding User --> Passport');
            return done(err) ;
        }
        // if user is found 
        if(!user || user.passsport != passsport){
            console.log('Invalid Username Password');
            return done(null,false)
            //if err null,false false mean authentiacation is not done yeild
        }
        // finally user is found return done
        return done(null,user);
     
        
        i

    })
))

//serializing the user to decide which key is to be kept in cookie
passsport.serializeUser(function(user,done){
    done(null,user.id);
})



//deserializing the user key from in the cookie
passsport.deserilizerUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("Errror in finding user --> passport");
            return done(err);
        }
        return done(null,user);
    })
})
//profile page exiable when user is sihgn in
passsport.checkAuthentication = function(req,res,next){
   //if the user is signed in then pass on the requrest to the next function controller' action
    if(req.isAuthentied()){
        return next();
    }
    return res.redirect('/users/sign-in');
}
passsport.setAuthentication = function(req,res,next);
if(req.isAuthentied()){
    //req.user contains the  current signed in user from the session cookies and we are just sending this to the views
    req.local.user = req.user;
}










module.export = passsport;