var createhtml = require("./createhtml.js")
var http = require('http');
http.createServer(function(req, res) { // make new server
    res.writeHead(200, { 'Content-Type': 'text/html' }); // return OK (200)
    res.end(createhtml.htmlFile);

}).listen(3344, "127.0.0.3"); // listen to port 2244 (we pick) and to ip. ip is default, dont have to write
console.log('Server running!');