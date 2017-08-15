class Game {
    constructor(id1, id2) {
        this.player1 = id1;
        this.player2 = id2;
        this.gameInit();
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
}






// class GameLogics {
//     constructor() {
//         this.makeShips();
//     }
//     makeShips() {
//         this.shipsPlayer1 =
//             this.shipsPlayer2 =
//     }

//     createRandomShip() {
//         Math.floor(Math.random() * 10)
//     }

// }

module.exports = Game;