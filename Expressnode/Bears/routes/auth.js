var users = require('../model/users');
var sha1 = require('sha1');

function basic_auth_asinc(req, res, next) {
    function callback(usersInMemory) {
        var tocheck = new Buffer(req.headers.authorization.split(' ')[1], 'base64').toString();
        tocheck = tocheck.split(":");
        tocheck[2] = tocheck[0] + ":" + sha1(tocheck[1]);

        if (req.headers.authorization && req.headers.authorization.search('Basic ') === 0) {
            // fetch login and password
            for (var k = 0; k < usersInMemory.length; ++k) {
                if (tocheck[2] == '' + usersInMemory[k].username + ':' + usersInMemory[k].password) {
                    next();
                    return;
                }
            }
        }
        console.log('Unable to authenticate user');
        res.header('WWW-Authenticate', 'Basic realm="Admin Area"');
        if (req.headers.authorization) {
            setTimeout(function() {
                res.send('Authentication required', 401);
            }, 5000);
        } else {
            res.send('Authentication required', 401);
        }
    }
    users.usersprivate(callback);
}


module.exports = basic_auth_asinc;