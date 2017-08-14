var emit = require('./emiting');
var connection = function(io) {
    io.on('connection', function(socket) {
        emit(socket);
    });
}

module.exports = connection;