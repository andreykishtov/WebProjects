const express = require('express');
const app = express();
const mysql = require("mysql");
const fs = require("fs");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "andrey665",
    database: "cartDB"
});
con.connect(function(err) {
    if (err) throw err;
    con.query("select * from categories", function(err, result, fields) {
        if (err) throw err;
        result = "var categories = " + JSON.stringify(result);
        //console.log(result);
        fs.writeFile('./public/categories.js', result, "utf8", function(err, data) {
            if (err) {
                return console.log(err);
            }
            //console.log("async read: " + data.toString());
        })
    });
});


///////////////////////////////
app.use(express.static('public'));
app.get('/home', function(req, res) {
    //res.send('./index.html');
})


app.listen(9999, function() {
    console.log('server up 9999!');
})