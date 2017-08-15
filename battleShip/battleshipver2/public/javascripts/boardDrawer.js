class BattleShip {
    constructor(canvasID, size = 10) {
        this.size = size;
        this.board = [];
        this.currentX = "X";
        this.currentO = "O";
        this.stateShip = 'ship';
        this.canvas = document.getElementById(canvasID);
        this.ctx = this.canvas.getContext('2d');
        this.sizeofcell = Math.floor(Math.min(this.canvas.clientHeight, this.canvas.clientWidth) / (size));
    }

    createCells(offsetX = 0, offsetY = 0) {
        for (let row = 0; row < this.size; ++row) {
            for (let col = 0; col < this.size; ++col) {
                let cell = new Cell(offsetX + this.sizeofcell * row, offsetY + this.sizeofcell * col, this.sizeofcell, this.sizeofcell);
                this.board.push(cell);
            }
        }
    }

    play() {
        this.registerEventListener();
    }

    draw(times) {
        this.times = times;
        for (let cell = 0; cell < (this.size * this.size) * times; ++cell) {
            var celldraw = this.board[cell];
            this.ctx.save();
            this.ctx.translate(celldraw.x, celldraw.y);
            this.ctx.strokeRect(0, 0, celldraw.width, celldraw.heigth);
            this.ctx.restore();
        }
    }

    registerEventListener() { //add listener on canvas
        //this.canvas.addEventListener("click", event => this.onClick(event))
    }

    onClick(event) {
        for (let cell = 0; cell < (this.size * this.size) * this.times; ++cell) {
            if (this.board[cell].isInCell(event.offsetX, event.offsetY)) {
                this.drawCurrentCell(cell);
                return;
            }
        }
    }

    drawCurrentCell(cell) {
        console.log(cell);
        if (cell === undefined) {
            return;
        }
        let cellObj = this.board[cell];
        let current = cellObj.getState()
        if (current === 'X' || current === 'O') {
            return;
        }
        // if (this.turn % 2) { //check x or O
        cellObj.setState(this.currentX);
        // } else {
        //cellObj.setState(this.currentO);
        // }
        cellObj.draw(this.ctx);
        //this.turn++;
    }

    drawBattleship(ships) { //will draw battleships
        // let ships = {
        //     ship1: [10, 11, 12, 13],
        //     ship2: [15, 16, 17, 18],
        //     ship3: [31, 32],
        //     ship4: [51, 52],
        // }
        if (ships) {
            for (let key in ships) {
                let ship = ships[key];
                for (let index = 0; index < ship.length; index++) {
                    this.drawShip(ship[index]);
                }
            }
        }
    }

    drawShip(cell) {
        if (cell === undefined) {
            return;
        }

        let cellObj = this.board[cell];
        let current = cellObj.getState()
        if (current === 'X' || current === 'O' || current === 'ship') {
            return;
        }

        cellObj.setState(this.stateShip);
        cellObj.draw(this.ctx);
    }


    checkWin() {}
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
        if (this.state === 'X') {
            this.drawX(ctx);
        }

        if (this.state === 'O') {
            this.drawO(ctx);
        }

        if (this.state === 'ship') {
            this.drawShip(ctx);
        }

    }

    drawO(ctx) { //miss
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.width / 2, this.width / 3, 0, 2 * Math.PI);
        ctx.stroke();
    }

    drawShip(ctx) { //ship
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.heigth - 10);
    }

    drawX(ctx) { //hit
        var offset = this.width / 5;
        ctx.moveTo(this.x + offset, this.y + offset);
        ctx.lineTo(this.x + this.width - offset, this.y + this.width - offset);
        ctx.moveTo(this.x + offset, this.y + this.width - offset);
        ctx.lineTo(this.x + this.width - offset, this.y + offset);
        ctx.stroke();
    }
}


var battleshipGame = new BattleShip('canvas');
battleshipGame.createCells();
battleshipGame.createCells(800);
battleshipGame.draw(2);
//battleshipGame.play();