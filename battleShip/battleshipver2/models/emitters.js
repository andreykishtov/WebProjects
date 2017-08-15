var users = require('./users');
var gamelogics = require('./gamelogics');
var sendships = 0; //remove after making random board

var emiters = function(socket) {
    socket.on('startConnection', (dataBeforeConnection) => { //User Connected
        let usersInServer = users.getUsers();
        socket.emit('connection Established', usersInServer); //Responce To User
        checkuserForEmit(socket);
        waitingForGame(socket);
    })
}

function checkuserForEmit(socket) {
    socket.on('username', (newUsername) => {
        var ok = users.checkUser(newUsername, socket.id);
        //console.log('going into users: name:' + newUsername + " id:" + socket.id);
        if (!ok) {
            socket.broadcast.emit('usernameOK', newUsername); //Responce To User
        }
    });
}

function waitingForGame(socket) {
    socket.on('startGame', (newUsername) => {
        let socketid = users.findsocketID(newUsername);
        if (sendships++) { //change after game works
            socket.broadcast.to(socketid).emit('connetionBeforeGame', gamelogics.shipsPlayer1);
        } else {
            socket.broadcast.to(socketid).emit('connetionBeforeGame', gamelogics.shipsPlayer2);
        }
    });
}





module.exports = emiters;



// socket.on('disconnect', function () {
//            console.log(socket.id + ' disconnected');
//            for (var i = 0; i < clients.length; i++) {
//                if (clients[i].id == socket.id) {

//                    clients.splice(i, 1);
//                    break;
//                }

//            }

//            console.log(clients);
//            socket.broadcast.emit('addUserNameToList', clients);

//        });