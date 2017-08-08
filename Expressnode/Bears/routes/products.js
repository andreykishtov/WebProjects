var express = require('express');
var router = express.Router();
var products = require('../model/products');
var basic_auth_asinc = require('./auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
    function callback(whatToGet) {
        res.json(whatToGet);
    }
    products(callback);
});

router.get('/:id', function(req, res, next) {
    function callback(whatToGet) {
        res.json(whatToGet[req.params.id]);
    }
    products.products(callback);
});


router.post('/', basic_auth_asinc, function(req, res, next) {
    products.addProduct(req.body);
});

router.put('/:id', basic_auth_asinc, function(req, res, next) {
    products.changeProduct(req.params.id, req.body);
});

router.delete('/:id', basic_auth_asinc, function(req, res, next) {
    products.deleteProduct(req.params.id);
});

module.exports = router;