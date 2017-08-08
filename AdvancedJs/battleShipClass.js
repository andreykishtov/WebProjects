var draw = function() {

    class Drawable {
        constructor(target = null, method = null) {
            this.name = new.target.name;
            this.isHighlighted = "isHighlighted";
            this.target = target;
            this.method = method;
        }
    }

    class Board extends Drawable {
        constructor(target = null, method = draw) {
            super(target, method);
        }
        boardState(...whattoprint) {
            console.log("The State Null")
            var printtoboard = document.getElementById("pre");
            printtoboard.innerHTML = whattoprint;
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
        getDamageRate(hit) {
            console.log("got Hit: " + hit);
            this.hitnumber++;
        };
        tryHit(x, y) {
            if (x === 2 && y === 2) {
                console.log("hit");
            }
        };
    }


    class SimpleBattleShip extends BattleShip {
        constructor(hitnumber = 2, target, method) {
            super(hitnumber, target, method);
        }
    }

    class GoldenBattleShip extends BattleShip {
        constructor(hitnumber = 3, target, method) {
            super(hitnumber, target, method);
        }
    }


    var BattleShip1 = new SimpleBattleShip(0);
    var BattleShip2 = new GoldenBattleShip(0);
    var BattleShip3 = new SimpleBattleShip(0);
    // var battleship = [];
    // var battleShip[0] = new SimpleBattleShip();
    // var BattleShip[1] = new GoldenBattleShip();
    // var BattleShip[2] = new SimpleBattleShip();
    document.getElementById("battleShip1").innerHTML = BattleShip1.name;
    document.getElementById("battleShip1").value = BattleShip1.name;
    document.getElementById("battleShip2").innerHTML = BattleShip2.name;
    document.getElementById("battleShip2").value = BattleShip2.name;
    document.getElementById("battleShip3").innerHTML = BattleShip3.name;
    document.getElementById("battleShip3").value = BattleShip3.name;

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
        B.boardState("Got Hit:" + value);
    });
    return [BattleShip1, BattleShip2, BattleShip3];

}

draw();
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