var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.js');
router.get('/', indexController.getIndex);
router.get('/cart', indexController.getCart);
module.exports = router;