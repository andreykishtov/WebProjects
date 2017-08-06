    var fs = require("fs");
    var http = require('http');
    var url = require("url");

    function getfile(params, res) {
        var getfil = fs.readFile(params, "utf8", function(err, data) {
            if (err) throw err;
            res.write(data);
        })
    }
    http.createServer(function(req, res) { // make new server
        res.writeHead(200, { 'Content-Type': 'text/html' }); // return OK (200)
        if (req.url == "/2/home.html" || req.url == "/") {
            getfile('.//2/home.html', res);
        } else if (req.url == "/3/about.html") {
            getfile('.//3/about.html', res);
        } else {
            res.writeHead(404);
            getfile('.//1/err.html', res);
        }
    }).listen(3000); // listen to port 2244 (we pick) and to ip. ip is default, dont have to write
    console.log('Server running!');

    // module url module path