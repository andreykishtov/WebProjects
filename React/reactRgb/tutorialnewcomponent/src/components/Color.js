import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Color extends Component {
    constructor(props) {
        super();
    }

    componentWillMount() {
console.log('componentWillMount');
    }

    componentDidMount() {
console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.props=nextProps;
console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
        console.log('shouldComponentUpdate');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');        
    }

    render() {
        let [...arr]=this.props;
        let newArr=arr.map(function (color) {
            let p= <p>{color}</p>
            return p; 
        });
        return (
            <div>
            {newArr}
            </div>
        );
    }
}

export default Color;