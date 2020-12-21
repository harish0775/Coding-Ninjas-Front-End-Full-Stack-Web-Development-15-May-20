const express = require('express');
const router = express.Router();
const passport = require('passports');
console.log('Users router is loaded');
const userscontrollers = require('../controllers/users_controller');
router.get('/profile',passport.checkAuthentication,userscontrollers.profile);
router.get('/sign-up',userscontrollers.SignUp);
router.get('/sign-in',userscontrollers.SignIn);

router.post('/create',usercontroller.create);


//use passport as a middle ware to Authenticate

/*
if sessioncretion fail redirect user sign in
we use passport Authentication

*/
router.post('/createSession',usercontroller.createSession);
 

router.post('/create-Session',passport.authentication(
    'local',{failureRedirect : '/user/sing-in'},usercontroller.createSession);

 module.exports = router;
 