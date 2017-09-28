import React, { Component } from 'react';
import Color from './Color';
import _ from 'lodash';
import PropTypes from 'prop-types';
export default class App extends Component {
    constructor() {
        super();
        this.state = { r: 0, g: 0, b: 0 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value,color) {
        let state = this.state;
        state[color]=value;
        this.setState(state);
    }

    render() {
        let count=0;
        let {r,g,b}=this.state;
        let inputArr = ['r', 'g', 'b'].map(color => {
            let name = <h2 key={++count}>{color}</h2>;
            let input = <input type="number" key={++count} onChange={(event) => this.handleChange(event.target.value,color)} />;
            let div = (
                <div key={++count}>
                    {name}
                    {input}
                </div>
            );
            return div;
        });

        return (
            <div>
                <h1>Change Color</h1>
                {inputArr}
                <Color r={r} g={g} b={b} />
                <div style={{backgroundColor:`rgb(${r},${g},${b})`,width: '100px',height:'100px'}}></div>
            </div>
        );
    }
}
