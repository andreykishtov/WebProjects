var http = require('http');
var url = require('url');
var router = require('./models/router');
var fs = require('fs');
const hostname = 'localhost',
    port = 3000;

http.createServer(OnRequest).listen(port, hostname);

function OnRequest(request, response) {

    // function sendfiles(request, response) {
    var urlParts = url.parse(request.url, true);
    if (urlParts.pathname == "/") {
        urlParts.pathname = "/index.html";
    }
    if (urlParts.pathname == "/cart") {
        urlParts.pathname = "/cart.html";
    }
    var filepath = __dirname + "/public" + urlParts.pathname;
    var mime = request.headers.accept || 'text/html';
    response.writeHead(200, { 'Content-Type': mime });
    fs.readFile(filepath, null, function(err, data) {
        if (err) {
            response.writeHead(404);
            response.write("File not Found!");
        } else {
            response.write(data);
        }
        response.end();
    });
    // }(request, response);
}










//////////////////////////////////////////////////////
//stuff
// var http = require('http');
// var router = require('./models/router');

// // Handle your routes here, put static pages in ./public and they will server
// router.register('/', loadHtml);

// function loadHtml(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('index.html');
//     res.end();
// }

// router.register('/cart', loadCart);

// function loadCart(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('cart.html');
//     res.end();
// }

// // We need a server which relies on our router
// var server = http.createServer(function(req, res) {
//     handler = router.route(req);
//     handler.process(req, res);
// });

// // Start it up
// server.listen(3000);