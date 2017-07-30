module.exports = function() {
    const db = require('../db/index.js');
    var io = require('../../server/index.js').io;
    var query = 'SELECT * FROM products INNER JOIN cart ON products.id=cart.prd_id';
    db.query(query, function(err, sendresult, fields) {
        if (err) throw err;
        //if (!sendresult.length) {
        //    return;
        // }
        //  console.log('res:' + JSON.stringify(sendresult));
        io.on('connection', function(socket) {
            console.log("emiting products")
            socket.emit('loadcartfromsql', { sendresult: sendresult });
        });
    });
}