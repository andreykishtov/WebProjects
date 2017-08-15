const emit = require('./emitters');
const connection = function(io) {
    io.on('connection', function(socket) {
        emit(socket);
    });
}

module.exports = connection;