var game = (function() {
    class Drawable {
        constructor(target = '', method = null) {
            this.battleships;
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

        };
        tryHit(x, y) {

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


})();

////////////////

module.exports = game;