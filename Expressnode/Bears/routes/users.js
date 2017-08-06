var express = require('express');
var router = express.Router();
var users = require('../model/users');
var basic_auth_asinc = require('./auth');

/* GET users listing. */

////////////get all users
router.get('/', function(req, res, next) {
    function callback(dataToShow) {
        res.json(dataToShow)
    }
    users.users(callback);
});
////////////////////////////get specific user
router.get('/:id', function(req, res, next) {
    function callback(dataToShow) {
        res.json(dataToShow[req.params.id]);
    }
    users.specificUser(callback);
});
///////////////auth middleware
router.use(function(req, res, next) {
    //if(err) { console.log(err); }
    basic_auth_asinc(req, res, next);
});


//add user
router.post('/', function(req, res, next) {
    users.addUser(req.body);
});

//delete
router.delete('/:id', function(req, res, next) {
    users.removeUser(req.params.id);
});

//update
router.put('/:id', function(req, res, next) {
    users.changeUserPasword(req.params.id, req.body);
});

module.exports = router;