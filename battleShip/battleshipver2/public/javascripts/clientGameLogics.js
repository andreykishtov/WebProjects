class GameLogics extends BattleShip {
    constructor() {
        super('canvas');
        this.registerEventListener();
    }

    registerEventListener() { //add listener on canvas
        this.canvas.addEventListener("click", event => this.onClick(event))
    }

    onClick(event) {
        for (let cell = 0; cell < (this.size * this.size) * this.times; ++cell) {
            if (this.board[cell].isInCell(event.offsetX, event.offsetY)) {
                if (this.AllreadyHit(cell)) {
                    return;
                }
                communication.fromServerIfHit(cell); //send request
                return;
            }
        }
    }

    AllreadyHit(cell) {
        //  console.log(cell);
        if (cell === undefined) {
            return;
        }
        let cellObj = this.board[cell];
        let current = cellObj.getState() //get whats now
        return (current === 'ship' || current === 'X');
    }



    checkboardIfHit(cell, ifHit) {
        let cellObj = this.board[cell];
        if (ifHit === 'O') {
            cellObj.setState(this.currentO); //miss Draw
            cellObj.draw(this.ctx);
            return;
        } else {
            cellObj.setState(this.currentX); //hit Draw
            cellObj.draw(this.ctx);
        }
    }

    checkWin() {}
}

var gameLogics = new GameLogics();
gameLogics.createCells();
gameLogics.createCells(800);
gameLogics.draw(2);
gameLogics.registerEventListener()