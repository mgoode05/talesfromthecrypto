// const cc = require('cryptocompare');
// global.fetch = require('node-fetch');
var usersCtrl = require('../../controllers/users');

var express = require('express');
var router = express.Router();

router.post('/users/signup', usersCtrl.signup);
router.post('/users/login', usersCtrl.login);




module.exports = router;




