var db = require('./db');

function products(callback) {
    //where categories_id=' + 1 + ';'
    var query = 'select * from products;'
    return db.query(query, function(err, sendresult, fields) {
        if (err) throw err;
        callback(sendresult);
    });
}

function addProduct(product) {
    var send = `INSERT INTO products(id,categories_id,name,price,image,sku) VALUES
    (` + product.id + "," + product.categories_id + ',"' + product.name + '","' + product.price + '","' + product.image + '",' + product.sku + ');'
    db.query(send, function(err) {
        if (err) throw err;
    });
};

function changeProduct(id, item) {
    var change = 'UPDATE products SET ' + item.name + "=" + item.value + ' WHERE id=' + id + ';'
    console.log(change);
    db.query(change, function(err) {
        if (err) throw err;
    });
};

function deleteProduct(id) {
    var deleteProd = 'DELETE FROM products WHERE id=' + id + ';'
    db.query(deleteProd, function(err) {
        if (err) throw err;
    });
}


module.exports = {
    products: products,
    addProduct: addProduct,
    changeProduct: changeProduct,
    deleteProduct: deleteProduct
};