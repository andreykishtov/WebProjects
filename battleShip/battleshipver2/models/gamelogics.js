var randomships = require('./random3');

class Game {
    constructor(id1, id2) {
        this.player1 = id1;
        this.player2 = id2;
        this.gameInit();
        this.currentPlayer;
        this.board1 = new randomships;
        this.board2 = new randomships;
        this.winners = {};
        this.winners[this.player1] = 0;
        this.winners[this.player2] = 0;
        this.objOfPlayers[0].board = this.board1.createShips(4);
        this.objOfPlayers[1].board = this.board2.createShips(4);
    }

    gameInit() {
        this.objOfPlayers = [{
            id: this.player1,
            board: "none"
                // board: {
                // ship0: [10, 11, 12, 13],
                // ship1: [17, 18, 19],
                // ship2: [35, 25, 15],
                // ship3: [31, 32],
                // ship4: [44, 54],
                // ship5: [51, 52],
                // ship6: [81],
                // ship7: [94],
                // ship8: [79],
                // ship9: [66],

        }, {
            id: this.player2,
            board: 'none'
                // board: {
                //     ship0: [10, 11, 12, 13],
                //     ship1: [7, 8, 9],
                //     ship2: [28, 38, 48],
                //     ship3: [31, 32],
                //     ship4: [44, 54],
                //     ship5: [51, 52],
                //     ship6: [80],
                //     ship7: [97],
                //     ship8: [78],
                //     ship9: [69],
                // }
        }];
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
                if (ship[index] == cell) {
                    return true;
                }
            }
        }
        return false;
    }

    ifPlayerAllowed(socketid, ifHit) {
        let otherPlayerID = this.FindOtherPlayer(socketid);
        if (ifHit === true && otherPlayerID !== this.currentPlayer) {
            return this.currentPlayer;
        } else {
            if (otherPlayerID !== this.currentPlayer) {
                let player = this.currentPlayer;
                this.currentPlayer = otherPlayerID;
                return player;
            }
        }
    }

    FindOtherPlayer(socketid, ishit) {
        if (socketid === this.player1) { //uses board of other player!//
            return this.player2;
        } else {
            return this.player1;
        }
    }

    gameEnds(IfHit, socketid) {
        if (IfHit) {
            return (++this.winners[socketid] === 1) //no more ships
        }
    }
}

module.exports = Game;