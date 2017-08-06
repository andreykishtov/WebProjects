const express = require('express');
const app = express();
const fs = require('fs');
const mysql = require("mysql");

app.use(express.static('/home/andrey/andreykurs/web/backend/homework'));
app.get('/', function(req, res) {
    res.send('./index.html');
    res.end();
});

app.get("/andrey_get", function(req, res) {
    var person = req.query;
    console.log(person);
    person.bmi = 10000 * person.weight / (person.height * person.height);
    console.log(person.bmi);

    // var newFile = fs.writeFile("/home/andrey/andreykurs/web/backend/homework/" + person.FirstName + ".txt", JSON.stringify(person), function(err) {
    //     if (err) {
    //         return console.log(err);
    //     } else {
    //         console.log("file written succesfully");
    //         return;
    //     }
    // });
    ////
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "andrey665",
        database: "bmiDB"
    })

    con.connect(function(err) {
        if (err) throw err;
        var send = 'INSERT INTO userBmi (firstname,lastname,weight,height,age) VALUES ("' + person.FirstName + '","' + person.LastName + '",' + person.weight + ',' + person.height + ',' + person.Age + ');'
        con.query(send, function(err) {
            if (err) throw err;
        })
        con.query("select*from userBmi", function(err, result, fields) {
            if (err) throw err;
            console.log(result);
        })
    })

    res.end();
});

app.listen(3000, function() {
    console.log('server 3000!');
});