const express = require('express');
const app = express();
const fs = require('fs');
const mysql = require("mysql");


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