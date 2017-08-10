class Game {
    constructor(canvasID, size = 3) {
        this.size = size;
        this.board = [];
        this.currentX = "X";
        this.currentO = "O";
        this.current;
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
        this.findClickedCell(); // Start listening to clicks
    }

    draw() {
        for (let cell = 0; cell < (this.size * this.size); ++cell) {
            this.board[cell].draw(this.ctx);
        }
    }

    onClick(event) {
        for (let cell = 0; cell < (this.size * this.size); ++cell)
            if (this.board[cell].isInCell(event.clientX, event.clientY)) {
                this.stateOfGame = this.gameOld.playGame(cell, this.boardOld);
                this.current = this.board[cell].getState()
                if (this.current === 'X' || this.current === 'O') {
                    return;
                }
                if (this.turn % 2)
                    this.board[cell].setState(this.ctx, this.currentX);
                else
                    this.board[cell].setState(this.ctx, this.currentO);

                this.turn++;
                if (this.stateOfGame[1].length)
                    this.computermove(this.stateOfGame[2]);
                else {
                    this.checkWin(this.stateOfGame[0]);
                }
            }
    }

    computermove(cell) {
        this.current = this.board[cell].getState()
        if (this.current === 'X' || this.current === 'O') {
            return;
        }
        if (this.turn % 2)
            this.board[cell].setState(this.ctx, this.currentX);
        else
            this.board[cell].setState(this.ctx, this.currentO);
        this.turn++;
    }

    findClickedCell() {
        this.canvas.addEventListener("click", event => this.onClick(event))
    }

    checkWin(win) {
        alert(win);
    }
    onChange() {
        console.log('change');
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
            if ((x < this.width + this.x && x > this.x) && (y < this.heigth + this.y && y > this.y))
                return true;
            else return false;
        } // returns true/false (does nothing)

    setState(ctx, state) { // can be ' ', 'x', 'o'
        if (state === 'X') {
            this.state = 'X'
            var offset = this.width / 5;
            ctx.beginPath();
            ctx.moveTo(this.x + offset, this.y + offset);
            ctx.lineTo(this.x + this.width - offset, this.y + this.width - offset);
            ctx.moveTo(this.x + offset, this.y + this.width - offset);
            ctx.lineTo(this.x + this.width - offset, this.y + offset);
            ctx.stroke();
        }

        if (state === 'O') {
            this.state = 'O'
            ctx.beginPath();
            ctx.arc(this.x + this.width / 2, this.y + this.width / 2, this.width / 3, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }

    getState() {
        return this.state;
    }

    draw(ctx) {
        ctx.rect(this.x, this.y, this.width, this.heigth);
        ctx.stroke();
    }
}
var game = new Game('canvas');
game.play();