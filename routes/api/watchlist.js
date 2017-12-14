var express = require('express');
var router = express.Router();
var watchlistCtrl = require('../../controllers/watchlist');

// router.post('/', checkAuth, watchlistCtrl.index);
router.post('/', checkAuth, watchlistCtrl.addToWatchlist);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authenticated'});
}

module.exports = router;
