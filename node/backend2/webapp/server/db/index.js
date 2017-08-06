var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'andrey665',
    database: 'cartDB'
});

db.connect();
module.exports = db;