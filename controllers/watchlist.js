const User = require('../models/user');

function addToWatchlist(req, res) {
    User.findById(req.user._id).then(user => {
        console.log(user)
        if (user.watchList.includes(req.body.stock)) return res.status(400).json({msg: 'Already in Watchlist'});
        user.watchList.push(req.body.stock);
        user.save();
        res.json({msg: 'Stock added'});
    });
}

module.exports = {
    addToWatchlist
}