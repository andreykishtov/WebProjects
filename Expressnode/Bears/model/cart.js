var db = require('./db');

function cart(callback) {
    var query = 'SELECT name FROM products INNER JOIN cart ON products.id=cart.prd_id;'
    return db.query(query, function(err, sendresult, fields) {
        if (err) throw err;
        callback(sendresult);
    });
}

module.exports = cart;