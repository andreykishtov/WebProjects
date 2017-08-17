var users = require('./users');
var gamelogics = require('./gamelogics');
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
        var ok = users.checkUser(newUsername, socket.id); //check person 
        if (!ok) {
            socket.broadcast.emit('usernameOK', newUsername); //Responce To User
        } else {
            socket.emit('usernameNotOk', newUsername); //Responce To User
        }
    });
}

function waitingForGame(socket, io) {
    socket.on('startGame', (newUsername) => {
        let socketid = users.findsocketID(newUsername);
        let CurrentGame = new gamelogics(socket.id, socketid); //saves first game
        let game = CurrentGame.objOfPlayers; //first player that started the game is first playing player0
        users.currentGame.push(CurrentGame);
        CurrentGame.currentPlayer = game[0].id;
        io.to(game[0].id).emit('connetionBeforeGame', game[0].board);
        io.to(game[1].id).emit('connetionBeforeGame', game[1].board, true);
        ///////////////////////////****game started****///////////////////////////////
    });

    socket.on('checkifHit', (cell) => { //User Connected
        var CurrentGame = users.findCurrentGame(socket.id);
        if (CurrentGame.ifPlayerAllowed(socket.id)) { //checks whos turn it is and allows if its right player turn.
            let opponent = CurrentGame.FindOtherPlayer(socket.id);
            let answer = CurrentGame.checkGame(socket.id, cell - 100);
            if (!CurrentGame.gameEnds(answer, socket.id)) {
                socket.emit('answerIfHit', { answer, cell });
                io.to(opponent).emit('answerIfHitFromOtherPlayer', { answer, cell });
            } else {
                socket.emit('answerIfHit', { answer, cell });
                io.to(opponent).emit('answerIfHitFromOtherPlayer', { answer, cell });
                socket.emit('endGame', users.findUserName(socket.id));
                io.to(opponent).emit('endGame', users.findUserName(opponent));
            }
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