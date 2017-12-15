const User = require('../models/user');

function getWatchlist(req, res) {
    console.log('hi get')
    User.findById(req.user._id, function(err, doc) {
        console.log(doc)
        res.json(doc.watchList).status(200)
    });
}

function addToWatchlist(req, res) {
    console.log('hi post')
    User.findById(req.user._id).then(user => {
        console.log(user)
        if (user.watchList.includes(req.body.stock)) return res.status(400).json({msg: 'Already in Watchlist'});
        user.watchList.push(req.body.stock);
        user.save();
        res.json({msg: 'Stock added'});
    });
}
// function delelteFromWatchlist 

module.exports = {
    getWatchlist,
    addToWatchlist
}