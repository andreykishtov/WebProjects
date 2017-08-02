var http = require('http');
var router = require('./models/router');
var pages = require('./models/pages')
const hostname = 'localhost',
    port = 3000;

router.register('/', pages.indexhtml);
router.register('/cart', pages.cart);

http.createServer(OnRequest).listen(port, hostname);

function OnRequest(request, response) {
    router.route(request, response);
}