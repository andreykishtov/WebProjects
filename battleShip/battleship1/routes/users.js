var express = require('express');
var router = express.Router();
var connectionManager = require('../models/connectionManager');
var users = require('../models/usersmodel')
    //var username;
    /* GET users listing. */
    // router.get('/', function(req, res, next) {
    //     var user = req.body
    //     res.send('respond with a resource');
    // });

router.post('/', function(req, res) {
    var username = req.body.username; //username of connected person
    //var connectedUsers = connectionManager.createUser(username); //creates User
    //users.checkUser(username);
    res.redirect('/loby');
    //console.log(username);
});



module.exports = router;