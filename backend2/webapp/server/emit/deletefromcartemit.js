module.exports = function() {
    const db = require('../db/index.js');
    var io = require('../../server/index.js').io;
    io.on('connection', function(socket) {
        console.log("Listening To delete function")
        socket.on('delete', function(data) {
            db.query('DELETE FROM cart WHERE prd_id=' + data.sku + ';', function(err, result, fields) {
                if (err) throw err;
            });
        });
    });
}