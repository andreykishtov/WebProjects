var db = require('../config/db');

// var user = `INSERT INTO user (email ,password) VALUES ('${email}', '${password}')`;


module.exports = {
    create: (req, callback) => {
        const { email, password } = req.body;
        
        if (!email && !password) return;
        db.query(`INSERT INTO user (email_address ,password) VALUES ('${email}', '${password}')`, function (err, result, field) {
            callback(result, err);
        });
    }


}