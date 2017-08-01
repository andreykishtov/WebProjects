var RegisterHolderCreator = require('./handler');
var fs = require('fs');
var parser = require('url');
var RegisterHolders = {};

exports.clear = function() {
    RegisterHolders = {};
}

exports.register = function(url, method) {
    RegisterHolders[url] = RegisterHolderCreator.CreateRegisterHolder(method);
}

exports.route = function(req) {
    url = parser.parse(req.url, true);
    var RegisterHolder = RegisterHolders[url.pathname];
    if (!RegisterHolder) { RegisterHolder = this.missing(req) }
    return RegisterHolder;
}

exports.missing = function(req) {
    // Try to read the file locally, this is a security hole, yo /../../etc/passwd
    var url = parser.parse(req.url, true);
    var path = __dirname + "/public" + url.pathname
    try {
        data = fs.readFileSync(path);
        mime = req.headers.accepts || 'text/html'
        return RegisterHolderCreator.CreateRegisterHolder(function(req, res) {
            res.writeHead(200, { 'Content-Type': mime });
            res.write(data);
            res.end();
        });
    } catch (e) {
        return RegisterHolderCreator.CreateRegisterHolder(function(req, res) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write("No route registered for " + url.pathname);
            res.end();
        });
    }
}