var users = require('./usersmodel');

var emit = function(socket) {
    socket.on('username', function(username) {
        //users.checkUser();
        users.checkUser(username);
        //console.log(data); //connected
        //socket.emit('getUser', { username: users.username });
    });

    socket.on('sendUserNames', function() {
        usersToSend = users.getUsers();
        socket.emit('sendUsersFromServer', { usersToSend });
    });
};

module.exports = emit;