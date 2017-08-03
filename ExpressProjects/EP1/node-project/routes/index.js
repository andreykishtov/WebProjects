var express = require('express');
var router = express.Router();
var mainPage = "I am Main Page";
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', mainPage: mainPage });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Express' });
});



module.exports = router;