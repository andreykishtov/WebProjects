var products = [{
    cat_id: "1",
    items: [{
        "sku": "560221947048472417",
        "name": "Flexidy",
        "price": "$376.35",
        "image": "https://robohash.org/quosvoluptatemeveniet.jpg?size=150x150&set=set1"
    }, {
        "sku": "3563334579189339",
        "name": "Zontrax",
        "price": "$75.19",
        "image": "https://robohash.org/rationemaximeexcepturi.png?size=150x150&set=set1"
    }, ]
}, {
    cat_id: "2",
    items: [{
        "sku": "560221947048472417",
        "name": "Flexidy",
        "price": "$376.35",
        "image": "https://robohash.org/quosvoluptatemeveniet.jpg?size=150x150&set=set1"
    }, {
        "sku": "3563334579189339",
        "name": "Zontrax",
        "price": "$75.19",
        "image": "https://robohash.org/rationemaximeexcepturi.png?size=150x150&set=set1"
    }, ]
}];

var mysql = require('mysql');



var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'andrey665',
    database: 'cartDB'
});
convert(products);


function convert(products) {
    connect.connect(function(err) {
        if (err) throw err;
        for (var i = 0; i < products.length; ++i) {
            var item = products[i].items;
            for (var j = 0; j < item.length; ++j) {
                var current = item[j];
                var send = `INSERT INTO products(categories_id,product_name,product_price,product_picture,product_sku) VALUES 
    (` + products[i].cat_id + ',"' + current.name + '","' + current.price + '","' + current.image + '",' + current.sku + ');'
                connect.query(send, function(err) {
                    if (err) throw err;
                })
            }
        }
    });
}