var users = require('./usersmodel');

var emit = function(socket) {
    var usersToSend = users.getUsers();
    if (usersToSend.length) {
        socket.emit('connection Established', { usersToSend });
    } else {
        socket.emit('connection Established', null);
    }

    socket.on('username', function(username) {
        users.checkUser(username);
        usersToSend = users.getUsers();
        //console.log("sss:" + usersToSend);
        socket.broadcast.emit('sendUsersFromServer', { usersToSend });
    });

    // socket.on('sendUserNames', function() {
    // });

    socket.on('requestGame', function(data) {
        //console.log(data);
        // usersToSend = users.getUsers();
        // socket.emit('sendUsersFromServer', { usersToSend });
    });



    //changeInUsers
};

module.exports = emit;