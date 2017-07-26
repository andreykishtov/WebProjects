var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "andrey665",
    database: "exampleDB"
})

con.connect(function(err) {
    if (err) throw err;
    con.query("select*from StudentDeatails", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
})