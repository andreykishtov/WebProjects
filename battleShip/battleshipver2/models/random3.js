class Random {
    constructor() {
        this.ships = [];
        this.board = this.randomBoard();
    }

    rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    randomBoard() {
        // var board = [];
        // for (var xindex = 0; xindex < 10; xindex++) {
        //     board[xindex] = [];
        //     for (var yindex = 0; yindex < 10; yindex++) {
        //         board[xindex][yindex] = true;
        //     }
        // }
        // return board;
        var x = 10,
            y = 10;
        // return Array.apply(null, Array(x)).map(e => Array(y).fill(0))
        return Array(x).fill().map(e => Array(y).fill(true));
    }

    createBoard10(x, y) {
        return Array.apply(null, Array(x)).map(e => Array(y).fill(true));
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
        this.changeBoardStateAfterShipX(ship);
        return ship;
    }

    YShipState(howBig) {
        do {
            var ship = [];
            let X = this.rand(0, 10);
            let Y = this.rand(0, 10 - howBig);
            for (var index = 0; index < howBig; index++) {
                ship[index] = "" + (X * 10 + (Y + index));
            }
        } while (this.checkShip(ship));
        this.changeBoardStateAfterShipY(ship);
        return ship;
    }

    changeBoardStateAfterShipX(ship) {
        var xy = ship[0];
        if (xy.length == 1) {
            var x = 0;
            var y = xy;
        } else {
            xy.split('');
            var x = xy[0];
            var y = xy[1];
        }
        this.PutMiss(x - 1, y - 1);
        this.PutMiss(x - 1, y);
        this.PutMiss(x - 1, y + 1);
        ship.forEach((xy) => {
            xy.split('');
            x = xy[0];
            y = xy[1];
            this.PutMiss(x, y - 1);
            this.PutMiss(x, y);
            this.PutMiss(x, y + 1);
        }, this);
        this.PutMiss(x + 1, y - 1);
        this.PutMiss(x + 1, y);
        this.PutMiss(x + 1, y + 1);
    }

    changeBoardStateAfterShipY(ship) {
        var xy = ship[0];
        xy.split('');
        var x = xy[0];
        var y = xy[1];
        this.PutMiss(x - 1, y - 1);
        this.PutMiss(x, y - 1);
        this.PutMiss(x + 1, y - 1);
        ship.forEach((xy) => {
            xy.split('');
            x = xy[0];
            y = xy[1];
            this.PutMiss(x - 1, y);
            this.PutMiss(x, y);
            this.PutMiss(x + 1, y);
        }, this);
        this.PutMiss(x - 1, y + 1);
        this.PutMiss(x, y + 1);
        this.PutMiss(x + 1, y + 1);
    }


    PutMiss(x, y) {
        // if (x.length > 1) {
        //     x.split('');
        //     x = x[1];
        // }
        // if (x == undefined || y == undefined) {
        //     console.log('x');
        // }
        // if (y.length > 1) {
        //     y.split('');
        //     y = y[1];
        // }
        if (x >= 0 && y >= 0 && y <= 9 && x <= 9) {
            this.board[x][y] = false;
        }
    }

    checkShip(ship) {
        var count = true;
        ship.forEach(function(xy) {
            // if (xy.length == 1) {
            //     var x = 0;
            //     var y = xy;
            // } else {
            xy.split('');
            let x = xy[0];
            let y = xy[1];
            // }
            if (this.board[x][y] === false || this.board[x][y] === undefined) {
                console.log(count);
                count = false;
            }
            return count;
        }, this);
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

    printBoard() {
        for (var index in this.board) {
            console.log(JSON.stringify(this.board[index]));
        }
    }

}

//var random = new Random;

//var ships = random.createShips(4);
//random.printBoard();
//console.log(ships)
//console.log(JSON.stringify(ships));
//module.exports = random.createShips;
module.exports = Random;