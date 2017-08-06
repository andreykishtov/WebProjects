const fs = require("fs");
const os = require("os");

var type = os.type();
var datatoserver;
// fs.appendFile('./test.txt', `system type${type}`, function(err) {
//     if (err) {
//         console.log("sadsad");
//     } else {
//         console.log("gg");
//     }
// });

fs.readFile('/../../home/andrey/andreykurs/web/fe/css/cssProject/cssp.html', "utf8", (err, data) => {
    if (err) throw err;
    //console.log(data);
    datatoserver = data;
});


fs.readFile('./test.txt', "utf8", (err, textfile) => {
    if (err) throw err;
    //console.log(data);
    datatoserver += textfile;
});



/*************** create http server */
var http = require('http');
http.createServer(function(req, res) { // make new server
    res.writeHead(200, { 'Content-Type': 'text/html' }); // return OK (200)
    res.end(datatoserver);

}).listen(3344, "127.0.0.3"); // listen to port 2244 (we pick) and to ip. ip is default, dont have to write
console.log('Server running!');