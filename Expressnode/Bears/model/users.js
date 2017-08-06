var db = require('./db');
var sha1 = require('sha1');
//////////////////users for Check
function usersprivate(callback) {
    var query = 'select username,password from users;'
    db.query(query, function(err, data, fields) {
        if (err) throw err;
        callback(data);
    });
}

//get users
function users(callback) {
    var query = 'select id,username,email,firstname,lastname,cartId from users;'
    db.query(query, function(err, data, fields) {
        if (err) throw err;
        callback(data);
    });
}
///////////////////////////////get specific user
function specificUser(callback, id) {
    var query = 'select id,username,email,firstname,lastname,cartId from users where id=' + id + ';'
    db.query(query, function(err, data, fields) {
        if (err) throw err;
        callback(data);
    });
}
////////////////////////add user
function addUser(user) {
    var sendUser = `INSERT INTO users(username,email,firstname,lastname,password,cartId) VALUES
    ("` + user.username + '","' + user.email + '","' + user.firstname + '","' + user.lastname + '","' + sha1(user.password) + '","' + user.cartId + '"' + ');'
    db.query(sendUser, function(err) {
        if (err) throw err;
    });
};
///////////////////////////deletes user
function removeUser(id) {
    var deleteUser = 'DELETE from users WHERE id=' + id + ';'
    db.query(deleteUser, function(err) {
        if (err) throw err;
    });
};
//////////////////////update password
function changeUserPasword(id, shaPass) {
    var updatePass = 'UPDATE users SET password="' + sha1(shaPass) + '" WHERE id=' + id + ';'
    db.query(updatePass, function(err) {
        if (err) throw err;
    });
}

module.exports = {
    usersprivate: usersprivate,
    users: users,
    specificUser: specificUser,
    addUser: addUser,
    removeUser: removeUser,
    changeUserPasword: changeUserPasword
};


/*
    "username":"andrey",
    "email":"asdad@asda.com",
    "firstname":"Andrey",
    "lastname":"Kishtov",
    "password":"Bixox",
    "cartId":"1" 
*/