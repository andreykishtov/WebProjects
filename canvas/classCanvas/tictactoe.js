class Game {
    constructor(canvasID, size = 3) {
        this.size = size;
        this.board = [];
        this.currentX = "X";
        this.currentO = "O";
        this.turn = 1;
        this.gameOld = newTTTGame();
        this.boardOld = this.gameOld.newGame();
        this.canvas = document.getElementById(canvasID);
        this.ctx = this.canvas.getContext('2d');
        this.sizeofcell = Math.floor(Math.min(this.canvas.clientHeight, this.canvas.clientWidth) / 3);
        for (let row = 0; row < size; ++row) {
            for (let col = 0; col < size; ++col) {
                let cell = new Cell(this.sizeofcell * row, this.sizeofcell * col, this.sizeofcell, this.sizeofcell);
                this.board.push(cell);
            }
        }
    }

    play() {
        this.draw(); // draw()
        this.registerEventListener(); // Start listening to clicks
    }

    draw() {
        for (let cell = 0; cell < (this.size * this.size); ++cell) {
            this.board[cell].draw(this.ctx);
        }
    }

    onClick(event) {
        for (let cell = 0; cell < (this.size * this.size); ++cell) {
            if (this.board[cell].isInCell(event.clientX, event.clientY)) {
                this.moveCurrent(cell);
                return;
            }
        }
    }

    moveCurrent(cell) {
        let movesLeft, stateOFGame, compmove;
        [stateOFGame, movesLeft, compmove] = this.gameOld.playGame(cell, this.boardOld);

        this.move(cell);
        this.move(compmove);
        if (movesLeft.length === 0 || stateOFGame !== 'Tie') {
            this.checkWin(stateOFGame);
        }
    }

    move(cell) {
        if (cell === undefined) {
            return;
        }
        let cellObj = this.board[cell];
        let current = cellObj.getState()
        if (current === 'X' || current === 'O') {
            return;
        }
        if (this.turn % 2) {
            cellObj.setState(this.currentX);
        } else {
            cellObj.setState(this.currentO);
        }
        cellObj.draw(this.ctx);
        this.turn++;
    }

    registerEventListener() {
        this.canvas.addEventListener("click", event => this.onClick(event))
    }

    checkWin(win) {
        alert(win);
    }

}

class Cell {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.heigth = h;
        this.state = ' ';
    }

    isInCell(x, y) {
        return ((x < this.width + this.x && x > this.x) && (y < this.heigth + this.y && y > this.y));
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.strokeRect(0, 0, this.width, this.heigth);

        if (this.state === 'X') {
            this.drawX(ctx);
        }

        if (this.state === 'O') {
            this.drawO(ctx);
        }
        ctx.restore();
    }

    drawO(ctx) {
        ctx.beginPath();
        ctx.arc(this.width / 2, this.width / 2, this.width / 3, 0, 2 * Math.PI);
        ctx.stroke();
    }

    drawX(ctx) {
        let offset = this.width / 5;
        ctx.beginPath();
        ctx.moveTo(offset, offset);
        ctx.lineTo(this.width - offset, this.width - offset);
        ctx.moveTo(offset, this.width - offset);
        ctx.lineTo(this.width - offset, offset);
        ctx.stroke();
    }
}
var game = new Game('canvas');
game.play();