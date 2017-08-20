var express = require('express');
var router = express.Router();
var users = require('../models/usersmodel.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "login", me: { username: users.users } });
});

router.get('/loby', function(req, res, next) {
    res.render('loby', {});
});

module.exports = router;