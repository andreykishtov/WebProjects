var express = require('express');
var router = express.Router();
var categories = require('../model/categories');
/* GET users listing. */
router.get('/list', function(req, res, next) {
    function callback(whatToGet) {
        res.json(whatToGet);
    }
    categories(callback);
});

module.exports = router;