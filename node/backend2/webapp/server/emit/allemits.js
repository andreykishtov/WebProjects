const db = require('../db/index.js');
var io = require('../../server/index.js').io;
const query = require('./querry.js');
////////////////////////
var sockettouse = function() {
    io.on('connection', function(socket) {
        socket.on('delete', function(data) {
            query.deleteFromCart = 'DELETE FROM cart WHERE prd_id=' + data.sku + ';';
            db.query(query.deleteFromCart, function(err, result, fields) {
                if (err) throw err;
            });
        });
        ////////////////
        query.select = 'select * from products where categories_id=' + data + ';';
        db.query(query.select, function(err, sendresult, fields) {
            if (err) throw err;
            socket.emit('beforeload', { sendresult: sendresult });
        });
        ///////////////////////
        socket.on('addtocart', function(data, first, quantity) {
            if (first) {
                query.insert = 'INSERT INTO cart (prd_id) VALUES (' + data.sku + ');';
                db.query(query.insert);
            } else {
                query.select2 = 'select * from cart where prd_id=' + data.sku + ';';
                db.query(query.select2, function(err, result, fields) {
                    if (err) throw err;
                    if (quantity) {
                        query.quantity = 'UPDATE cart SET ? WHERE ?', [{ quantity: quantity }, { prd_id: data.sku }];
                        db.query(query.update)
                    } else {
                        query.quantity = 'UPDATE cart SET ? WHERE ?', [{ quantity: ++result[0].quantity }, { prd_id: data.sku }];
                        db.query(query.update);
                    }
                });
            }
        });
        ///////////////////////
        db.query(query.innerjoin, function(err, sendresult, fields) {
            if (err) throw err;
            socket.emit('loadcartfromsql', { sendresult: sendresult });
        });
    });
};

module.exports = sockettouse;