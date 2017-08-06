var users = {
    andrey: {
        myUserName: 'andrey',
        myPassword: 'andrey',
    }
}

var currentPage = '/';

var loggedIn = false;

function loggedInCheck(req, res) {
    var sess = req.session;
    if (loggedIn) {
        sess.login = 1;
        //sess.realName = getNameFromDB();
        return;
    }

    if (req.url == '/login') {
        return;
    }
    if (req.url == '/user_form') {
        return;
    }
    currentPage = req.url;
    res.redirect('/login');
}

function validate(username, password) {

    if (username !== users.andrey.myUserName) {
        return ({ status: 'wrong username, please try again' });
    }
    if (password !== users.andrey.myPassword) {
        return ({ status: 'wrong password, please try again' });
    }
    // var sess = req.session;
    loggedIn = true;
    return ({ status: 'success', redirect: currentPage })

}

module.exports = {
    loggedInCheck: loggedInCheck,
    validate: validate
}