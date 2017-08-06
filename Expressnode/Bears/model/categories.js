var db = require('./db');

function categories(callback) {
    var query = 'SELECT categories, count(*) as size FROM categories join products on categories.id = products.categories_id group by categories.categories order by size;'
    return db.query(query, function(err, sendresult, fields) {
        if (err) throw err;
        callback(sendresult);
    });
}

module.exports = categories;