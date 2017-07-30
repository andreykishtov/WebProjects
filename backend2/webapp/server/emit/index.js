module.exports = function(data) {
    const db = require('../db/index.js');
    var io = require('../../server/index.js').io;
    db.query('select * from products where categories_id=' + data + ';', function(err, sendresult, fields) {
        if (err) throw err;
        io.on('connection', function(socket) {
            console.log("emiting products")
            socket.emit('beforeload', { sendresult: sendresult });
        });
    });
}