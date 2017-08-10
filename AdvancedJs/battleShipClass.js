window.onload = function() {

    // var battleship = [];
    // var battleShip[0] = new SimpleBattleShip();
    // var BattleShip[1] = new GoldenBattleShip();
    // var BattleShip[2] = new SimpleBattleShip();
    document.getElementById("battleShip1").innerHTML = drawer.BattleShip1.name;
    document.getElementById("battleShip1").value = drawer.BattleShip1.name;
    document.getElementById("battleShip2").innerHTML = drawer.BattleShip2.name;
    document.getElementById("battleShip2").value = drawer.BattleShip2.name;
    document.getElementById("battleShip3").innerHTML = drawer.BattleShip3.name;
    document.getElementById("battleShip3").value = drawer.BattleShip3.name;

    var hit = BattleShip1.getDamageRate(2);
    this.Board = new Board();

    document.getElementById("draw").addEventListener("click", () => {
        let C = new Board();
        C.boardState(JSON.stringify(C));
    });

    document.getElementById("hit").addEventListener("click", () => {
        let B = new Board();
        var value = document.getElementById("select").value;
        //var battle = BattleShip1.getDamageRate(1)
        //console.log([value].getDamageRate(1));
        B.draw("Got Hit:" + value);
    });

}

var drawer = (function() {
    class Drawable {
        constructor(target = '', method = null) {
            this.battleships;
            this.name = new.target.name;
            this.isHighlighted = "isHighlighted";
            this.target = target;
            this.method = method;
        }
        add(drawable) {
            this;
        }
        draw() {
            console.log("The State Null")
            var printtoboard = document.getElementById("pre");
            printtoboard.innerHTML = whattoprint;
            //            throw Error('Please implement in derived')

        }
    }

    class Board extends Drawable {
        constructor(target = null, method = draw) {
            super(target, method);
        }

    }

    class MessageBoard extends Drawable {
        constructor(target, method) {
            super(target, method);
        }
    }

    class BattleShip extends Drawable {
        constructor(hitnumber, target, method) {
            super(target, method);
            this.hitnumber = hitnumber;
        }
        getDamageRate() {
            console.log("got Hit: " + hit);
            return this.hitnumber;
        };
        tryHit(x, y) {
            if (x === 2 && y === 2) {
                this.hitnumber--;
            }
        };
    }


    class SimpleBattleShip extends BattleShip {
        constructor(hitnumber = 3, target, method) {
            super(hitnumber, target, method);
        }
    }

    class GoldenBattleShip extends BattleShip {
        constructor(hitnumber = 2, target, method) {
            super(hitnumber, target, method);
        }
    }


    var BattleShip1 = new SimpleBattleShip(0);
    var BattleShip2 = new GoldenBattleShip(0);
    var BattleShip3 = new SimpleBattleShip(0);
    return { BattleShip1, BattleShip2, BattleShip3 };
})();


//draw();
// Create a module which draws all objects in a system, each time that it's method draw() is called.
// The module holds an array of objects. All the objects inherit from class *Drawable*,
// which includes a name of the object, property isHighlighted, target (where to draw to), method draw().
// Classes *Board*, *MessageBoard* and *BattleShip* inherit from *Drawable*.
// Class *BattleShip* has methods: getDamageRate() and tryHit(x,y).
// The constructor gets the number of hits which a battleship can get.
// Classes *SimpleBattleShip*, *GoldenBattleShip* inherit from *BattleShip*.
// In this stage the exercise the draw prints to a <PRE> tag text only.
// You need to put battleship select and button "hit" to add a hit to a battleship.
// You need to put a draw button.

let myFirstPromise = new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.onload = function() {
        if (xhttp.status >= 200 && xhttp.status < 300) {
            resolve(xhttp.response);
        } else {
            reject(xhttp.statusText);
        }
    }
});



var myPromise = new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://api.icndb.com/jokes/random/1');
    request.onload = function() {
        if (request.status == 200) {
            resolve(request.response); // we got data here, so resolve the Promise
        } else {
            reject(Error(request.statusText)); // status is not 200 OK, so reject
        }
    };

    request.onerror = function() {
        reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };

    request.send(); //send the request
});

myPromise.then(function(data) {
    return JSON.parse(data);
}).then(function(jokes) {
    console.log('Promise fulfilled return');
    console.log(jokes.value[0].joke);
}).catch(function(err) {
    console.log(`Error: ${err.message}`);
});