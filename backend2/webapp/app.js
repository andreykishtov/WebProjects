const connection = require('./server');

const port = connection.app.get('port') || 3000;

connection.server.listen(port, function() {
    console.log("started app");
})