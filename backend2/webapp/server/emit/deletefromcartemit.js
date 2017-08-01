var deleteitem = function() {
    const db = require('../db/index.js');
    var io = require('../../server/index.js').io;
    io.on('connection', function(socket) {
        console.log("Listening To delete function")
        socket.on('delete', function(data) {
            var query = 'DELETE FROM cart WHERE prd_id=' + data.sku + ';'
            db.query(query, function(err, result, fields) {
                if (err) throw err;
            });
        });
    });
}

module.exports = deleteitem;