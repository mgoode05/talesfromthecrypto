// const cc = require('cryptocompare');
// global.fetch = require('node-fetch');
var usersCtrl = require('../../controllers/users');

var express = require('express');
var router = express.Router();

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);




module.exports = router;




