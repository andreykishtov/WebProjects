class Communication {
    constructor() {
        this.socket = io.connect('http://localhost:3000');
        this.select = document.getElementById("playerList");
    }

    startComunication() {
        this.socket.emit('startConnection');
        this.socket.on('connection Established', (usersObject) => { //connected
            if (usersObject.length) {
                cmlogic.firstTimeGetUsersFromServer(usersObject); //function outside
            }
            this.socket.on('connetionBeforeGame', (ships) => { //connected to game
                cmlogic.playGame(ships);
            });
        });
    }

    sendUserToPlayer(username) {
        this.socket.emit('username', username);
    }

    waitingForPlayer() {
        this.socket.on('usernameOK', (username) => { //connected
            cmlogic.createOption(username);
        });
    }

    startGame(username) {
        this.socket.emit('startGame', username);
    }

    fromServerIfHit(cell) {
        this.socket.emit('checkifHit', cell);
        this.socket.on('answerIfHit', (cellContent) => { //connected
            gameLogics.checkboardIfHit(cell, ifHit); ////////////////////////////game Logics///////////////////////
        });
    }

}

var communication = new Communication;