var db = require("../config/db");

// var user = `INSERT INTO user (email ,password) VALUES ('${email}', '${password}')`;

module.exports = {
    create: (req, callback) => {
        const { email, password } = req.body;

        if (!email && !password) return;
        db.query(
            `INSERT INTO user (email_address ,password) VALUES ('${email}', '${password}')`,
            function(err, result, field) {
                callback(err, result);
            }
        );
    },
    checkUser: (req, callback) => {
        const { email, password } = req.body;
        if (!email && !password) return;
        var queryUser = `select user_id , first_name, last_name from user where
        email_address = '${email}' and password = '${password}'`;
        db.query(queryUser, function(err, result, field) {
            callback(err, result);
        });
    },
    getLocations: (req, callback) => {
        var queryUser = `SELECT location FROM location`;
        db.query(queryUser, function(err, result, field) {
            callback(err, result);
        });
    }
};
