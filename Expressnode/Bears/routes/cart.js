var express = require('express');
var router = express.Router();
var cart = require('../model/cart');
/* GET users listing. */
router.get('/', function(req, res, next) {
    function callback(whatToGet) {
        res.json(whatToGet);
    }
    cart(callback);
});

module.exports = router;