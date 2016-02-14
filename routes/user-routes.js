var _ = require('lodash');
var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
var models = require('../models');
var config = require('./config');

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, {
        expiresInMinutes: 60 * 5
    });
}

router.post('/sessions/create', function(req, res) {

    console.log("create request made with body:" + JSON.stringify(req.body));
    if (!req.body.username || !req.body.password) {
        console.log("no username, password specified for login!");
        return res.status(400).send("You must send the username and the password");
    }

    findUser(
        req.body,
        function(user) {
            console.log("Found user:" + user.username);

            if (!user.password === req.body.password) {
                return res.status(401).send("The username or password don't match");
            }
            console.log("Log in successful!");
            res.status(201).send({
                id_token: createToken(user.username)
            });
        },
        function() {
            console.log("Error occured while finding user!");
            return res.status(401).send("The username or password don't match");
        }
    );

});

router.post('/register', function(req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }
    findUser(
        req.body,
        function(user) {
            console.log("User found :"+user.username);
            return res.status(400).send("A user with that username already exists");
        },
        function() {
            console.log("User not found, creating new!");
            createUser(req.body, function(user) {
                res.status(201).send({
                    id_token: createToken(user)
                });
            });
        }
    );
});

module.exports = router;

function findUser(user, onSuccess, onError) {
    var user = models.User.findOne({
            where: {
                username: user.username,
                password: user.password
            }
        }).then(onSuccess)
        .error(onError);
}

function createUser(user, onSuccess) {
    models.User.create({
        username: user.username,
        password: user.password
    }).then(function(user) {
        onSuccess(user);
    }).catch(function(error) {
        console.log(error);
    });
}
