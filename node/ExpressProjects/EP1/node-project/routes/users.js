var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var login = require('./login');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.post('/user_frm', urlencodedParser, function(req, res) {
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        login: 'failed',
    };
    var resin = login.validate(req.session, response.first_name, response.last_name)
    response.redirect = resin.redirect;
    response.login = resin.status;
    res.send(response);
});


module.exports = router;