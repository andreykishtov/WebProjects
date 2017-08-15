var users = require('./users');
var gamelogics = require('./gamelogics');
var sendships = 0; //currentGame
var CurrentGame = [];
var emiters = function(socket, io) {
    socket.on('startConnection', (dataBeforeConnection) => { //User Connected
        let usersInServer = users.getUsers();
        socket.emit('connection Established', usersInServer); //Responce To User
        checkuserForEmit(socket);
        waitingForGame(socket, io);
        checIfHitOnServer(socket);
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

function waitingForGame(socket, io) {
    socket.on('startGame', (newUsername) => {
        let socketid = users.findsocketID(newUsername);
        //console.log(socketid);
        CurrentGame[sendships] = new gamelogics(socket.id, socketid); //saves first game
        let game = CurrentGame[sendships].objOfPlayers;
        //console.log(game[0].board);
        io.to(game[0].id).emit('connetionBeforeGame', game[0].board);
        io.to(game[1].id).emit('connetionBeforeGame', game[1].board);
        //socket.emit('connetionBeforeGame', game[1].board);
    });
}

function checIfHitOnServer(socket) {
    socket.on('checkifHit', (cell) => { //User Connected

        socket.broadcast.to(socketid).emit('connetionBeforeGame', gamelogics.shipsPlayer2);
    })
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

//