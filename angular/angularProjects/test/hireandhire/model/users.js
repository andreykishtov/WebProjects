const sqlConnection = require('./sqlConnection');

function validateUser(req, callback) {
    var queryString = `SELECT id, first_name, last_name FROM user
    WHERE email = '${req.body.email}' AND password = '${req.body.password}'`;

    sqlConnection.query(queryString, function(err, result, field) {
        if (err) {
            throw err;
        }
        callback(result);
    });
}

module.exports = {
    validateUser: validateUser
};
