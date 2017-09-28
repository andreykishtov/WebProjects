import React, { Component } from 'react';
import Task from './Task';
export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { tasks } = this.props;
        let arr = tasks.map(item => <Task key={item.id} text={item.title} />);
        return <div className="list">{arr}</div>;
    }
}
// app
// board
// cell
// HandelSquareClick
// onclick func onClickSquare
