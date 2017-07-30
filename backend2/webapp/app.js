const connection = require('./server');

//const port = connection.app.get('port') || 3000;

connection.server.listen(3000, function() {
    console.log("started app");
})