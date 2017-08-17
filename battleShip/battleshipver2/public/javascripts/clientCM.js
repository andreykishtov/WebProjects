class Communication {
    constructor() {
        this.socket = io.connect();
        this.select = document.getElementById("playerList");
        this.answerIfHit();
        this.endGame();
    }

    startComunication() {
        this.socket.emit('startConnection');
        this.socket.on('connection Established', (usersObject) => { //connected
            if (usersObject.length) {
                cmlogic.firstTimeGetUsersFromServer(usersObject); //function outside
            }
            this.socket.on('connetionBeforeGame', (ships, draw) => { //connected to game
                if (draw) {
                    battleshipGame.drawText('Game Started Wait For It!', 'black', 100, 200);
                }
                cmlogic.playGame(ships);
            });
        });
    }

    sendUserToPlayer(username) {
        this.socket.emit('username', username);
    }

    waitingForPlayer() {
        this.socket.on('usernameNotOk', username => { //connected
            alert(`UserName Allready Exsists: ${username}`); //doesn`t work
        });

        this.socket.on('usernameOK', username => { //connected
            cmlogic.createOption(username);
        });
    }

    startGame(username) {
        this.socket.emit('startGame', username);
        battleshipGame.drawText('Game Started Attack!', 'black', 100, 200);
    }

    fromServerIfHit(cell) {
        this.socket.emit('checkifHit', cell);
    }

    answerIfHit() {
        this.socket.on('answerIfHit', (ifHit) => { //connected
            gameLogics.checkboardIfHit(ifHit.cell, ifHit.answer);
            battleshipGame.drawText('Other Player Turn', 'black', 100, 200);
        });
        this.socket.on('answerIfHitFromOtherPlayer', (ifHit) => { //connected
            gameLogics.checkboardIfHit(ifHit.cell - 100, ifHit.answer);
            battleshipGame.drawText('your Turn Attack!', 'black', 100, 200);
        });
    }

    endGame() {
        this.socket.on('endGame', (usernameOfWinner) => { //connected
            gameLogics.endGame(usernameOfWinner);
        });
    }

}

var communication = new Communication;