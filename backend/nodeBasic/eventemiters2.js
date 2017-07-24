var Resource = require('./recorces');

var r = new Resource(5);

r.on('start', function() {
    console.log("I've started")
});

r.on('data', function(d) {
    console.log("I've recived data number: " + d)
});

r.on('first', function() {
    console.log("You are number oneeee")
});

r.on('three', function() {
    console.log("three is your lucky number")
});

r.on('end', function(t) {
    console.log("I'm done with " + t + " data events")
});


const exp = require('express');
var app = exp();

app.get('/', function(req, res) {
    var number = parseInt(req.query.number);
    var fibunacinumer = fib(number);
    res.status(200).write(`<html>${fibunacinumer}</html>`);
});


app.listen(2222, function() {
    console.log('Start server1');
});

function fib(number) {
    var f = [];
    f[0] = 1;
    f[1] = 1;
    for (var index = 2; index < number; index++) {
        f[index] = f[index - 1] + f[index - 2];
    }
    return f[index - 1];
}