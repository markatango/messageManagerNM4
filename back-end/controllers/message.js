var Message = require('../models/message');

module.exports = {
    get: function (req, res) {
        Message.find({}).populate('user', '-pwd').exec(function (err, result) {
            res.send(result)
        })
    },

    post: function (req, res) {
        console.log(req.body, req.user);
        //database.collection('messages').insertOne(req.body);
        
        req.body.user = req.user; // access to req.user via middleware 

        var message = new Message(req.body); // instantiate model
        message.save(); // mongoose function
        res.status(200);
    }
}