module.exports = function() {
    const db = require('../db/index.js');
    var io = require('../../server/index.js').io;
    io.on('connection', function(socket) {
        console.log("cart add emiting")
        socket.on('addtocart', function(data, first, quantity) {
            if (first) {
                db.query('INSERT INTO cart (prd_id) VALUES (' + data.sku + ');', function(err, result, fields) {
                    if (err) throw err;
                });
            } else {
                db.query('select * from cart where prd_id=' + data.sku + ';', function(err, result, fields) {
                    if (err) throw err;
                    if (quantity) {
                        db.query('UPDATE cart SET ? WHERE ?', [{ quantity: quantity }, { prd_id: data.sku }])
                    } else {
                        db.query('UPDATE cart SET ? WHERE ?', [{ quantity: ++result[0].quantity }, { prd_id: data.sku }])
                    }
                });
            }
        });
    });
    io.on.length = 0;
}