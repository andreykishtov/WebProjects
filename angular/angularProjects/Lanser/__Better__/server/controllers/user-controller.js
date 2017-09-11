const user = require("../querys/user-querys");

module.exports = {
    createUser: (req, res, next) => {
        user.create(req, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json(result);
            //res.end();
        });
    },
    checkUser: (req, res, next) => {
        user.checkUser(req, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json(result);
            //res.end();
        });
    },
    getLocations: (req, res, next) => {
        user.getLocations(req, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json(result);
            //res.end();
        });
    }
};
