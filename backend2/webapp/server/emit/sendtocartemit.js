module.exports = function() {
    const db = require('../db/index.js');
    var io = require('../../server/index.js').io;
    var query = {
        insert: 'INSERT INTO cart (prd_id) VALUES (' + data.sku + ');',
        select: 'select * from cart where prd_id=' + data.sku + ';',
        update: ""
    }
    io.on('connection', function(socket) {
        console.log("cart add emiting")
        socket.on('addtocart', function(data, first, quantity) {
            if (first) {
                db.query(query.insert);
            } else {
                db.query(query.select, function(err, result, fields) {
                    if (err) throw err;
                    if (quantity) {
                        query.update = 'UPDATE cart SET ? WHERE ?', [{ quantity: quantity }, { prd_id: data.sku }];
                        db.query(query.update)
                    } else {
                        query.update = 'UPDATE cart SET ? WHERE ?', [{ quantity: ++result[0].quantity }, { prd_id: data.sku }];
                        db.query(query.update);
                    }
                });
            }
        });
    });
}