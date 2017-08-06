var express = require('express');
var router = express.Router();
var products = require('../model/products');
var auth = require('./auth');

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

/////////////auth middleware
router.use(function(req, res, next) {
    if (err) { console.log(err); }
    auth(req, res, next);
});

router.post('/', function(req, res, next) {
    products.addProduct(req.body);
});

router.put('/:id', function(req, res, next) {
    products.changeProduct(req.params.id, req.body);
});

router.delete('/:id', function(req, res, next) {
    products.deleteProduct(req.params.id);
});

module.exports = router;