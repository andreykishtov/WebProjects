class BattleShip {
    constructor(canvasID, size = 10) {
        this.size = size;
        this.board = [];
        this.currenthit = "hit";
        this.currentmiss = "miss";
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

    draw(times) {
        this.times = times;
        for (let cell = 0; cell < (this.size * this.size) * times; ++cell) {
            var celldraw = this.board[cell];
            this.ctx.save();
            this.ctx.translate(celldraw.x, celldraw.y);
            this.ctx.strokeRect(0, 0, celldraw.width, celldraw.height);
            this.ctx.restore();
        }
    }

    drawBattleship(ships) { //will draw battleships
        // let ships = { ship1: [10, 11, 12, 13]}
        //this.socketId = ships.socketId;
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

        let cellObj = gameLogics.board[cell]; //  this for drawBattleships is from other object
        let current = cellObj.getState();
        if (current === 'hit' || current === 'miss' || current === 'ship') {
            return;
        }

        cellObj.setState(this.stateShip);
        cellObj.draw(this.ctx);
    }
}

class Cell {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.state = ' ';
    }

    clickedCell(x, y) {
        return ((x < this.width + this.x && x > this.x) && (y < this.height + this.y && y > this.y));
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    draw(ctx) {
        if (this.state === 'hit') {
            this.drawX(ctx);
        }

        if (this.state === 'miss') {
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
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
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