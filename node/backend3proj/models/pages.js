var fs = require('fs');
var router = require('./router');

function indexhtml(request, response) {
    router.readfile(request, response, '/index.html');
}

function cart(request, response) {
    router.readfile(request, response, '/cart.html');
}

module.exports = {
    indexhtml: indexhtml,
    cart: cart
}