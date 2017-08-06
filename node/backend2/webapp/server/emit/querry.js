var query = {
    innerjoin: 'SELECT * FROM products INNER JOIN cart ON products.id=cart.prd_id',
    quantity: ""
};

module.exports = query;