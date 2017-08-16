class Communication {
    constructor() {
        this.socket = io.connect();
        this.select = document.getElementById("playerList");
        this.answerIfHit();
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
    }

    answerIfHit() {
        this.socket.on('answerIfHit', (ifHit) => { //connected
            gameLogics.checkboardIfHit(ifHit.cell, ifHit.answer);
        });
        this.socket.on('answerIfHitFromOtherPlayer', (ifHit) => { //connected
            gameLogics.checkboardIfHit(ifHit.cell - 100, ifHit.answer);
        });
    }

}

var communication = new Communication;