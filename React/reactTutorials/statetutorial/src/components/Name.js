import React, { Component } from 'react';
export default class Name extends Component {
    constructor() {
        super();
        this.state = { yourName: '' };
        // this.updateAnswer = this.updateAnswer.bind(this);
    }
    updateAnswer(event) {
        this.setState({ yourName: event.target.value });
    }

    render() {
        let {yourName} = this.state;
        return (
            <div className="container">
                <h1>Your Name Is?</h1>
                <input type="text" placeholder="your Name is" onChange={event=>this.updateAnswer(event)}/>
                <h3>Your Name Is {yourName}</h3>
            </div>
        );
    }
}
