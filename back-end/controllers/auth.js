var User = require('../models/user');
var jwt  = require('jwt-simple');
var moment = require('moment');

module.exports = {
    register: function (req, res) {
        console.log(req.body); // test

        User.findOne({
            email: req.body.email
        }, function (err, existingUser) {

            if (existingUser)
                res.status(409).send({
                    message: "User is already registered."
                });

            var user = new User(req.body);
            user.save(function (err, result) {
                if (!err) {
                    res.status(200).send({token: createToken(result)});
                } else {
                    res.status(500).send({
                        message: err.message
                    });
                }
            })
        });

    },
    
    login: function (req, res) {
        console.log('login', req.body); // test

        User.findOne({
            email: req.body.email
        }, function (err, user) {

            if (!user) {
                res.status(401).send({
                    message: "Email or Password is invalid."
                });
            }

            if (req.body.pwd == user.pwd) {
                console.log(req.body, user.pwd);
                res.send({
                    token: createToken(user)
                });
            } else {
                return res.status(401).send({
                    message: "Invalid email and /or password"
                });
            };

        });
    }
}

function createToken(user){
    var payload  = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, 'secret');
}