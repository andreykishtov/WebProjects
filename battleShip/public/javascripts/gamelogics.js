class Game {
    constructor(canvasID, size = 10) {

    }
    play() {
        // Start listening to clicks
        // draw()
    }

    onClick(event) {}
    findClickedCell() {}
    checkWin() {}
}

class Cell {
    constructor(x, y, w, h) {}
    isInCell(x, y) {} // returns true/false (does nothing)
    setState(state) {} // can be ' ', 'x', 'o'
    getState() {}

}