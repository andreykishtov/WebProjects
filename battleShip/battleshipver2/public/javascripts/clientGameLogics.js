class GameLogics extends BattleShip {
    constructor() {
        super('canvas');
        //this.canvas = document.getElementById(canvasID);
        this.registerEventListener();
    }

    registerEventListener() { //add listener on canvas
        this.canvas.addEventListener("click", event => this.onClick(event))
    }

    // onClick(event) {
    //     for (let cell = 0; cell < (this.size * this.size) * this.times; ++cell) {
    //         if (this.board[cell].isInCell(event.offsetX, event.offsetY)) {
    //             this.drawCurrentCell(cell);
    //             return;
    //         }
    //     }
    // }

    // drawCurrentCell(cell) {
    //     console.log(cell);
    //     if (cell === undefined) {
    //         return;
    //     }
    //     let cellObj = this.board[cell];
    //     let current = cellObj.getState()
    //     if (current === 'X' || current === 'O') {
    //         return;
    //     }
    //     // if (this.turn % 2) { //check x or O
    //     cellObj.setState(this.currentX);
    //     // } else {
    //     //cellObj.setState(this.currentO);
    //     // }
    //     cellObj.draw(this.ctx);
    //     //this.turn++;
    // }

}

var gameLogics = new GameLogics();
//gameLogics.registerEventListener()