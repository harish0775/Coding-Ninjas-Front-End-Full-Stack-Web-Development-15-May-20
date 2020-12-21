
const express = require('express');
const router = express.Router();
console.log('Router is loaded');
const homecontrollers = require('../controllers/home_controller');
router.get('/',homecontrollers.home);
router.use('/user', require('./users'));
module.exports = router;
