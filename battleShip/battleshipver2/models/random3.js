class Random {
    constructor() {
        this.ships = [];
        this.board = this.randomBoard(10, 10);
    }

    rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    randomBoard(x, y) {
        // return Array.apply(null, Array(x)).map(e => Array(y).fill(0))
        return Array(x).fill().map(e => Array(y).fill(true));
    }

    createBoard10(x, y) {
        return Array.apply(null, Array(x)).map(e => Array(y).fill(true));
    }

    createShips(BiggestShip) {
        var count = BiggestShip;
        for (var otherWay = 1; otherWay <= BiggestShip; otherWay++) {
            for (var index = 0; index < otherWay; index++) {
                this.ships.push(this.createShip(count)); //4
            }
            count--;
        }

        return {
            ship0: this.ships[0],
            ship1: this.ships[1],
            ship2: this.ships[2],
            ship3: this.ships[3],
            ship4: this.ships[4],
            ship5: this.ships[5],
            ship6: this.ships[6],
            ship7: this.ships[7],
            ship8: this.ships[8],
            ship9: this.ships[9],
        }
    }

    createShip(howbig) {
        let Up = this.rand(0, 2);
        if (Up) {
            return this.XshipState(howbig);
        } else {
            return this.YShipState(howbig);
        }
    }

    XshipState(howBig) {
        var ship;
        do {
            ship = [];
            let X = this.rand(0, 10 - howBig);
            let Y = this.rand(0, 10);
            for (var index = 0; index < howBig; index++) {
                ship[index] = "" + ((X + index) * 10 + Y);
            }
        } while (this.checkShip(ship));
        this.changeBoardStateAfterShip(ship);
        return ship;
    }

    YShipState(howBig) {
        var ship;
        do {
            ship = [];
            let X = this.rand(0, 10);
            let Y = this.rand(0, 10 - howBig);
            for (var index = 0; index < howBig; index++) {
                ship[index] = "" + (X * 10 + (Y + index));
            }
        } while (this.checkShip(ship));
        this.changeBoardStateAfterShip(ship);
        return ship;
    }

    changeBoardStateAfterShip(ship) {
        var x = 0;
        var y = 0;
        ship.forEach(xy => {
            if (xy < 10) {
                x = 0;
                y = parseInt(xy);
            } else {
                xy.split('');
                x = parseInt(xy[0]);
                y = parseInt(xy[1]);
            }
            this.putMiss(x, y);
        }, null);
    }

    putMiss(x, y) {
        x = parseInt(x);
        y = parseInt(y);
        let xar = [x, x + 1, x - 1];
        var yar = [y, y + 1, y - 1];
        xar.forEach(function(xelement) {
            yar.forEach(function(yelement) {
                this.putdotsaroundShip(xelement, yelement);
            }, this);
        }, this);
    }

    putdotsaroundShip(x, y) {
        if (x >= 0 && y >= 0 && y <= 9 && x <= 9) {
            this.board[x][y] = false;
        }
    }

    checkShip(ship) {
        ship.forEach(xy => {
            xy.split('');
            var x = xy[0];
            var y = xy[1];
            if (!y) {
                y = x;
                x = 0;
            }
            x = parseInt(x);
            y = parseInt(y);
            if (this.checkAroundDot(x, y)) {
                return true;
            }
        }, this);
        return false;
    }

    checkAroundDot(x, y) {
        var something = false;
        let xar = [x, x + 1, x - 1];
        var yar = [y, y + 1, y - 1];
        xar.forEach(function(Xelement) {
            yar.forEach(function(Yelement) {
                if (this.checkBoardforFalse(Xelement, Yelement)) { something = true; }
            }, this);
        }, this);
        return something;
    }

    checkBoardforFalse(x, y) { //return true if there is false in board x y
        if (x >= 0 && y >= 0 && y <= 9 && x <= 9) {
            return (this.board[x][y] === false);
        }
    }

    printBoard() {
        this.board.forEach((element) => {
            console.log(JSON.stringify(element));
        }, this);
    }

}

//var random = new Random;

//var ships = random.createShips(4);
//random.printBoard();
//console.log(ships)
//console.log(JSON.stringify(ships));
//module.exports = random.createShips;
module.exports = Random;