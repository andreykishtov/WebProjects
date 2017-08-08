var express = require('express');
var router = express.Router();
var users = require('../model/users');
var basic_auth_asinc = require('./auth');

/* GET users listing. */

////////////get all users
router.get('/', function(req, res, next) {
    users.users(function(dataToShow) {
        res.json(dataToShow)
    });
});
////////////////////////////get specific user
router.get('/:id', function(req, res, next) {
    users.specificUser(function(dataToShow) {
        res.json(dataToShow[req.params.id]);
    });
});

//add user
router.post('/', basic_auth_asinc, function(req, res, next) {
    users.addUser(req.body);
});

//delete
router.delete('/:id', basic_auth_asinc, function(req, res, next) {
    users.removeUser(req.params.id);
});

//update
router.put('/:id', basic_auth_asinc, function(req, res, next) {
    users.changeUserPasword(req.params.id, req.body);
});

module.exports = router;