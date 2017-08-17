// var ships = {
//     ship0: [10, 11, 12, 13],
//     ship1: [15, 16, 17],
//     ship2: [15, 16, 17],
//     ship3: [31, 32],
//     ship4: [51, 52],
//     ship5: [51, 52],
//     ship6: [51],
//     ship7: [51],
//     ship8: [51],
//     ship9: [51],

// }

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var makeShip = (maxShip) => {
    let ship = [];
    let X = rand09();
    let Y = rand09();
    let verthoriz = rand(0, 1);
    var flag;
    if (verthoriz) {
        let temp = Y;
        for (var ind = 0; ind < maxShip; ind++) {
            if (Y !== 9) {
                ship[ind] = Y++ + "" + X;
                flag = 1;
            } else {
                if (flag) {
                    Y = temp;
                }
                flag = 0;
                ship[ind] = --Y + "" + X;
            }
        }
    } else {
        let temp = X;
        for (var ind = 0; ind < maxShip; ind++) {
            if (X !== 9) {
                ship[ind] = Y + "" + X++;
                flag = 1;
            } else {
                if (flag) {
                    X = temp;
                }
                flag = 0;
                ship[ind] = Y + "" + --X;
            }
        }
    }
    return ship;
}
var ships = [];
for (var index = 0; index < array.length; index++) {
    ships.push(makeShip(index));
}


function rand09() {
    return rand(0, 9);
}

//console.log(X)
//console.log(Y)