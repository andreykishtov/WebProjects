var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'andrey',
    database: 'LanserDB'
});
db.connect();
module.exports = db;
