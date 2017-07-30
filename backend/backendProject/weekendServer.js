const express = require('express');
const app = require('express')();
const mysql = require("mysql");
const fs = require("fs");
const server = require('http').Server(app);
const io = require('socket.io')(server);
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "andrey665",
    database: "cartDB"
});
con.connect(function(err) {
    if (err) throw err;

});



///////////////////////////////
app.use(express.static('public'));
app.get('/categories', function(req, res) {
    var href = req.query;
    var time = 0;
    res.redirect("/products/index.html");
    console.log(href.product);
    con.query('select * from products where categories_id=' + href.product + ';', function(err, result, fields) {
        if (err) throw err;
        sendresult = result;
        connectemit(result);

        function connectemit(sendresult) {
            io.on('connection', function(socket) {
                console.log("emiting To Click")
                socket.emit('click', { sendresult: sendresult });
            });
        }
    });

    //////////////////////////////////////

    io.on('connection', function(socket) {
        console.log("Listening To Click")
        socket.on('addtocart', function(data) {
            console.log(data)
                //con.query('insert * into cart where categories_id=' + href.product + ';', function(err, result, fields) {
                //  if (err) throw err;

            // });
        });
    });

    res.end();
})


server.listen(9999, function() {
    console.log('server up 9999!');
})