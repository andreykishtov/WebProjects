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
    });
}

function checkuserForEmit(socket) {
    socket.on('username', (newUsername) => {
        var ok = users.checkUser(newUsername, socket.id);
        if (!ok) {
            socket.broadcast.emit('usernameOK', newUsername); //Responce To User
        }
    });
}

function waitingForGame(socket, io) {
    socket.on('startGame', (newUsername) => {
        let emitData = CurrentGame.startGame(newUsername);
        // let socketid = users.findsocketID(newUsername);
        // CurrentGame[sendships] = new gamelogics(socket.id, socketid); //saves first game
        // let game = CurrentGame[sendships].objOfPlayers; //first player that started the game is first playing player0
        // CurrentGame[sendships].currentPlayer = game[0].id;
        io.to(game[0].id).emit('connetionBeforeGame', game[0].board);
        io.to(game[1].id).emit('connetionBeforeGame', game[1].board);
        ///////////////////////////****game started****///////////////////////////////
    });

    socket.on('checkifHit', (cell) => { //User Connected
        if (CurrentGame[sendships].ifPlayerAllowed(socket.id)) { //checks whos turn it is and allows if its right player turn.
            let oponent = CurrentGame[sendships].FindOtherPlayer(socket.id);
            let answer = CurrentGame[sendships].checkGame(socket.id, cell - 100);
            socket.emit('answerIfHit', { answer, cell });
            io.to(oponent).emit('answerIfHitFromOtherPlayer', { answer, cell });
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

//