import React, { Component } from 'react';
import Cell from './Cell';

 const Board = ({ boardState,onClickCell }) =>{
        return( 
        <div className="board">
            { boardState.map(item => <Cell handleCell={onClickCell} key={item.id} value={item} />)}
        </div>)
}

export default Board;