var express = require('express');
var router = express.Router();
var watchlistCtrl = require('../../controllers/watchlist');

router.get('/', checkAuth, watchlistCtrl.index);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authenticated'});
}