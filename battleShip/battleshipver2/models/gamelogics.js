class Game {
    constructor(id1, id2) {
        this.player1 = id1;
        this.player2 = id2;
        this.gameInit();
        this.currentPlayer;
        this.CurrentGame = [];
    }

    gameInit() {
        this.objOfPlayers = [{
            id: this.player1,
            board: {
                ship0: [10, 11, 12, 13],
                ship1: [17, 18, 19],
                ship2: [35, 25, 15],
                ship3: [31, 32],
                ship4: [44, 54],
                ship5: [51, 52],
                ship6: [81],
                ship7: [94],
                ship8: [79],
                ship9: [66],
            }
        }, {
            id: this.player2,
            board: {
                ship0: [10, 11, 12, 13],
                ship1: [7, 8, 9],
                ship2: [28, 38, 48],
                ship3: [31, 32],
                ship4: [44, 54],
                ship5: [51, 52],
                ship6: [80],
                ship7: [97],
                ship8: [78],
                ship9: [69],
            }
        }];
    }

    startGame(newUsername) {
        let socketid = users.findsocketID(newUsername);
        CurrentGame[sendships] = new gamelogics(socket.id, socketid); //saves first game
        let game = CurrentGame[sendships].objOfPlayers; //first player that started the game is first playing player0
        CurrentGame[sendships].currentPlayer = game[0].id;
        return game;
    }

    checkGame(socketid, cell) {
        if (socketid != this.player1) { //uses board of other player!//
            var currentboard = this.objOfPlayers[0].board;
        } else {
            var currentboard = this.objOfPlayers[1].board;
        }
        for (var key in currentboard) {
            var ship = currentboard[key];
            for (var index = 0; index < ship.length; index++) {
                if (ship[index] === cell) {
                    return true;
                }
            }
        }
        return false;
    }

    ifPlayerAllowed(socketid) {
        let otherPlayerID = this.FindOtherPlayer(socketid);
        if (otherPlayerID !== this.currentPlayer) {
            let player = this.currentPlayer;
            this.currentPlayer = otherPlayerID;
            return player;
        }
    }

    FindOtherPlayer(socketid) {
        if (socketid === this.player1) { //uses board of other player!//
            return this.player2;
        } else {
            return this.player1;
        }
    }
}

module.exports = Game;