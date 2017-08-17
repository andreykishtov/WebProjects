class GameLogics extends BattleShip {
    constructor() {
        super('canvas');
        this.registerEventListener();
    }

    registerEventListener() { //add listener on canvas
        this.canvas.addEventListener("click", event => this.onClick(event))
    }

    onClick(event) { //starts from 100 because i want to click on other user board
        for (let cell = 100; cell < (this.size * this.size) * this.times; ++cell) {
            if (this.board[cell].clickedCell(event.offsetX, event.offsetY)) {
                if (this.AllreadyHit(cell)) { //changes board
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
        return (current === 'miss' || current === 'hit');
    }

    checkboardIfHit(cell, ifHit) {
        let cellObj = this.board[cell];
        if (!ifHit) {
            cellObj.setState(this.currentmiss); //miss Draw
            cellObj.draw(this.ctx);
            return;
        } else {
            cellObj.setState(this.currenthit); //hit Draw
            cellObj.draw(this.ctx);
        }
    }

    endGame(usernameOfWinner) {
        let currentUser = cmlogic.username;
        if (currentUser === usernameOfWinner) {
            battleshipGame.drawText(`The Winner Is ${currentUser}`)
        } else {
            battleshipGame.drawText(`The Winner Is ${usernameOfWinner}`)
        }

    }

}

var gameLogics = new GameLogics();
gameLogics.createCells();
gameLogics.createCells(1000);
gameLogics.draw(2);