var express = require('express');
var router = express.Router();
var mainPage = "I am Main Page";
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', mainPage: mainPage });
});

router.get('/login', function(req, res, next) {
    var langTexts = {
        en: {
            dir: 'ltr',
            title: 'Login',
            username: 'User',
            password: 'Pass',
            submit: 'Log In',
            banner: 'Huge Header'
         },
        he: {
            dir: 'rtl',
            title: 'לוגין',
            username: 'משתמש',
            password: 'סיסמא',
            submit: 'כניסה',
            banner: 'כותרת גדולה'
         }
    };
    var texts = langTexts.he;
    res.render('login', texts);
});



module.exports = router;