import React, { Component } from 'react';
export default class Counter extends Component {
    constructor() {
        super();
        this.state = { counter: 0 };
    }
    ChangeCounter(value) {
        let changeCount = this.state.counter + value;
        this.setState({ counter: changeCount });
    }
    render() {
        let div = (
            <div className="inline">
                <button onClick={this.ChangeCounter.bind(this,1)}>+</button>
                <p>{this.state.counter}</p>
                <button onClick={()=>this.ChangeCounter(-1)}>-</button>
            </div>
        );

        return <div className="container">{div}</div>;
    }
}
