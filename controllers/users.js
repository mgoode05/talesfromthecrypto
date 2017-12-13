var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function signup(req, res) {
    var user = new User(req.body);
    user.save()
        .then(user => {
            res.json({token: createJWT(user)})
            .catch(err => res.status(400).json(err));
        })
}

//Helper Function
function createJWT(user) {
    return jwt.sign(
        {user}, //data payload
        SECRET,
        {expiresIn: '24h'}
    );
}

function login(req, res) {
    User.findOne({email: req.body.email}).then(user => {
      if (!user) return res.status(401).json({err: 'Bad Credentials'})
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          var token = createJWT(user);
          res.json({token});
        } else {
          return res.status(401).json({err: 'bad creds'});
        }
      });
    }).catch(err => res.status(401).json(err));
  }

  module.exports = {
      signup,
      login
  };