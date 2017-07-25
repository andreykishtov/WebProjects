const exp = require('express');
var EventEmitter = require('events').EventEmitter;
var app = exp();
var total = 0;
var em = new EventEmitter;
app.get('/', function(req, res) {
    ++total;
    var number = parseInt(req.query.number);
    var fibunacinumer = fib(number); //number;
    res.write(`<html>request Number ${total} \n</html>`);
    if (total == 150 || total == 500 || total == 700) {
        console.log("total before" + total);
        setTimeout(function() {
            console.log(total);
        }, 1000);
    }
    res.status(200).write(`<html>${fibunacinumer}</html>`);
    // if (total > 50) {
    //     setTimeout(function() {
    //         res.status(200).write(`<html>${fibunacinumer}</html>`);
    //     }, 20);

    //     console.log(total);
    // }
    console.log(process.pid);
    process.on("SIGINT", function() {
        console.log("you want to kill me?");
    })
    res.end();
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


// var url = require("url")
// var http = require('http');
// http.createServer(function(req, res) { // make new server
//     res.writeHead(200, { 'Content-Type': 'text/html' }); // return OK (200)    
//     var q = url.parse(req.url, true).query; //.query;
//     console.log(q.number);
//     var n = parseInt(q.number);
//     //res.end(q.number);
//     res.url = fib(n);
//     console.log(res.url);
//     res.end(); //fib(n)
// }).listen(4444, "127.0.0.1"); // listen to port 2244 (we pick) and to ip. ip is default, dont have to write
// console.log('Server running!');

// function fib(number) {
//     var f = [];
//     f[0] = 1;
//     f[1] = 1;
//     for (var index = 2; index < number; index++) {
//         f[index] = f[index - 1] + f[index - 2];
//     }
//     return f[index - 1];
// }