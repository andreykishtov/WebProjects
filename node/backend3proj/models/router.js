var url = require('url');
var fs = require('fs');

var registerUrl = {};

function register(url, func) {
    registerUrl[url] = func;
}

function route(request, response) {
    var where = url.parse(request.url).pathname;
    if (registerUrl[where]) {
        registerUrl[where](request, response);
    } else {
        readfile(request, response, where)
    }
}

function notFound(request, response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write("googogogoogog");
    response.end();
}

function readfile(request, response, filepath) {
    fs.readFile('public' + filepath, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write("<h1>Error HTML Not Found</h1>");
            response.end();
            return;
        }
        var mime = findformat(filepath);
        if (mime) {
            response.writeHead(200, { 'Content-Type': mime });
        }
        response.write(data);
        response.end();
    });
}

function findformat(filepath) {
    if (!filepath) { return; }
    filepath = filepath.split(".");
    filepath = filepath[filepath.length - 1];
    if (filepath == "js") {
        return 'text/javascript';
    }
    if (filepath == "css") {
        return 'text/css';
    }
    if (filepath == "html") {
        return 'text/html';
    }

    // if (!filepath) { return; }
    // filepath = filepath.split(".");
    // filepath = filepath[filepath.length - 1];
    // var mime = {
    //     'js': 'text/javascript',
    //     'css': 'text/css',
    //     'html': 'text/html'
    // }
    // console.log(mime[filepath]);
    // return mime[filepath];
}

module.exports = {
    register: register,
    route: route,
    readfile: readfile
}