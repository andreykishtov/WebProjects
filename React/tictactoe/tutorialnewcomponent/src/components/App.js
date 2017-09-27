import React, { Component } from 'react';
import Board from './Board';
import _ from 'lodash';
//import Cell from './Cell'
export default class App extends Component {
    constructor() {
        super();

        this.state = {
            board: [
                { id: 1, title: null },
                { id: 2, title: null },
                { id: 3, title: null },
                { id: 4, title: null },
                { id: 5, title: null },
                { id: 6, title: null },
                { id: 7, title: null },
                { id: 8, title: null },
                { id: 9, title: null }
            ],
            winCombo: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
            currentTurn: true,
            currentTurnText:''
        };

        this.handleDraw = this.handleDraw.bind(this);
    }

    handleDraw(id) {
        let board = _.each(this.state.board, item => {
            // CheckWin(this.state.board,this.state.winCombo);
            if (item.id === id) {
                if (!_.isEmpty(item.title)) {
                    return;
                }

                if (this.state.currentTurn) {
                    return (item.title = 'X');
                }
                return (item.title = 'O');
            }
        });

        this.setState({ board: board, currentTurn: !this.state.currentTurn });
        console.log(this.state.currentTurn);
    }

    changeTurn(board, turn) {
        //  return board;
    }

    checkWin(board, winState) {
        board.map(function(arrayCell) {

            arrayCell;
        });
    }

    play() {}

    render() {
        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <h2>{this.currentTurnText}</h2>
                <Board onClickCell={this.handleDraw} boardState={this.state.board} />
            </div>
        );
    }
}
