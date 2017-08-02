var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
app.get('/form', function(req, res) {
    res.sendFile(__dirname + "/view/form.html");
});
//jsonParser or urlencoded
app.post('/user_form', urlencodedParser, function(req, res) {
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    res.send(response);
});

var server = app.listen(3000, function() {
    var addr = server.address();
    console.log(`listening at http://%s:%s`, addr.address, addr.port);
});