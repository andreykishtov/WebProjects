var users = {
    andrey: {
        myUserName: 'andrey',
        myPassword: 'andrey',
    }
}

var currentPage = '/';

function loggedInCheck(req, res) {
    var sess = req.session;
    if (sess.loggedIn) {
        //sess.realName = getNameFromDB();
        return;
    }

    if (req.url == '/login') {
        return;
    }
    if (req.url == '/users/user_form') {
        return;
    }
    currentPage = req.url;
    res.redirect('/login');
}

function validate(sess, username, password) {

    if (username !== users.andrey.myUserName) {
        return ({ status: 'wrong username, please try again' });
    }
    if (password !== users.andrey.myPassword) {
        return ({ status: 'wrong password, please try again' });
    };
    sess.loggedIn = true;
    return ({ status: 'success', redirect: currentPage })
}

module.exports = {
    loggedInCheck: loggedInCheck,
    validate: validate
}