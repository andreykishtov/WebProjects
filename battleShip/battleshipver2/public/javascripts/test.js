function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function rand09() {
    return rand(0, 9);
}

function randomShips(shipmaxsize) {
    var board = [];
    for (var index = 0; index < 100; index++) {
        board[index] = true;
    }
    var ships = [];
    while (ships.length < 10) {
        var verthoriz = rand(0, 2);
        if (verthoriz) {
            var ship = [];
            do {
                var X = rand09();
            } while (X > 9 - shipmaxsize);
            let Y = rand09();
            let index = 0;
            while (index < shipmaxsize && board["" + (X + index) + "" + Y]) {
                ship[index] = "" + (X + index) + "" + Y;
                board["" + (X + index++) + "" + Y] = false;
            }
            if (index < shipmaxsize) {} else {
                //addDots(ship, 1);
                ships.push(ship);
                if (ships.length === 1) {
                    shipmaxsize-- //4 1
                }
                if (ships.length === 3) {
                    shipmaxsize-- //3 2
                }
                if (ships.length === 6) {
                    shipmaxsize-- //2 3
                }
                if (ships.length === 10) {
                    shipmaxsize-- //1 4
                }
            }
        } else {
            var ship = [];
            do {
                var Y = rand09();
            } while (Y > 9 - shipmaxsize);
            let X = rand09();
            let index = 0;
            while (index < shipmaxsize && board["" + X + "" + (Y + index)]) {
                ship[index] = "" + X + "" + (Y + index);
                board["" + X + "" + (Y + index++)] = false;
            }
            if (index < shipmaxsize) {} else {
                //addDots(ship, 0);
                ships.push(ship);
                if (ships.length === 1) {
                    shipmaxsize-- //4 1
                }
                if (ships.length === 3) {
                    shipmaxsize-- //3 2
                }
                if (ships.length === 6) {
                    shipmaxsize-- //2 3
                }
                if (ships.length === 10) {
                    shipmaxsize-- //1 4
                }
            }
        }
    }
    console.log(JSON.stringify(board));
    return ships;

    function addDots(ship, XorY) {
        if (XorY) {
            if (ship[index]) {
                var element = '' + ship[index];
            }
            var element = element.split('');
            if (element[0] >= 0) {
                board[(element[0] - 1) + (element[1] - 1)] = false;
                board[(element[0] - 1) + (element[1])] = false;
                board[(element[0] - 1) + (element[1] + 1)] = false;
            }
            for (var index = 0; index < ship.length; index++) {
                if (ship[index]) {
                    var element = '' + ship[index];
                } else {
                    element++;
                }
                element = element.split('');
                board[(element[0]) + (element[1] - 1)] = false;
                board[(element[0]) + (element[1])] = false;
                board[(element[0]) + (element[1] + 1)] = false;
            }
        } else {
            if (ship[index]) {
                var element = '' + ship[index];
            }
            element = element.split('');
            if (element[1] >= 0) {
                board[(element[0] - 1) + (element[1] - 1)] = false;
                board[(element[0]) + (element[1] - 1)] = false;
                board[(element[0] + 1) + (element[1] - 1)] = false;
            }
            for (var index = 0; index < ship.length; index++) {
                if (ship[index]) {
                    var element = '' + ship[index];
                } else {
                    element = element + 10;
                }
                element = element.split('');
                board[(element[0] - 1) + (element[1])] = false;
                board[(element[0]) + (element[1])] = false;
                board[(element[0] + 1) + (element[1])] = false;
            }
        }
    }
}

var ships = randomShips(4);
console.log(JSON.stringify(ships));