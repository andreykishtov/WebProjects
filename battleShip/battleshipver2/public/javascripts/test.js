function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


var ships = {
    ship0: [10, 11, 12, 13],
    ship1: [15, 16, 17],
    ship2: [15, 16, 17],
    ship3: [31, 32],
    ship4: [51, 52],
    ship5: [51, 52],
    ship6: [51],
    ship7: [51],
    ship8: [51],
    ship9: [51],

}

var makeships = ships => {
    for (var key in ships) {
        var ship = object[key];
        var X = rand18();
        var Y = getRandomArbitrary(X - 1, X + 1);
    }
}


var rand18 = function() {
    return getRandomArbitrary(1, 8);
}