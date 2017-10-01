import React from 'react';
import Task from '../Task';

const List = ({ tasks }) => {
    return <div className="list">{tasks.map(item => <Task key={item.id} text={item.title} />)}</div>;
};

export default List;
// app
// board
// cell
// HandelSquareClick
// onclick func onClickSquare
