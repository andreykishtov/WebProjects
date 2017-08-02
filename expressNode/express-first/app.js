var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var login = false;
var jsonParser = bodyParser.json();
var response;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var redir;
var users = {
    andrey: {
        login: "andrey",
        password: "andrey"
    }
}

app.get('/', function(req, res) {
    if (!login) {
        res.redirect("/login");
        redir = '/';
    }
    res.sendFile(__dirname + "/view/index.html");
});

app.get('/login', function(req, res) {
    res.sendFile(__dirname + "/view/login.html");
});
app.get('/js/ajax.js', function(req, res) {
    res.sendFile(__dirname + "/view/ajax.js");
});

app.get('/about', function(req, res) {
    if (!login) {
        res.redirect("/login");
        redir = '/about';
    }
    res.sendFile(__dirname + "/view/about.html");
});

app.get('/page1', function(req, res) {
    if (!login) {
        redir = '/page1';
        res.redirect("/login");
    }
    res.sendFile(__dirname + "/view/page1.html");
});

app.get('/form', function(req, res) {
    if (!login) {
        redir = '/form';
        res.redirect("/login");
    }
    res.sendFile(__dirname + "/view/form.html");
});

//////////////////////////
app.post('/user_form', urlencodedParser, function(req, res) {
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        login: 'failed',
        redir: redir
    };
    if (req.body.first_name == users.andrey.login && req.body.last_name == users.andrey.password) {
        response.login = "succsesfull";
        login = true;
    }
    // console.log(response);
    res.send(response);
    if (login) res.redirect(response.redir);
});


var server = app.listen(3000, function() {
    var addr = server.address();
    console.log(`listening at http://%s:%s`, addr.address, addr.port);
});