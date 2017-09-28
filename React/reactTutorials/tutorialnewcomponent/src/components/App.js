import React, { Component } from 'react';
import Cell from './cell';
export default class App extends Component {
    render() {
        // let numberArray = [1, 2, 3, 4, 5];
        let array = [];
        let MultiplyCounter=10;
        let count=0;

        for (let index = 0; index < MultiplyCounter; ++index) {
            array.push(index+1);
        }

        var div=[];
        for (var index = 1; index < array.length+1; index++) {
            div.push(<br key={count++}/>)
            for (var j = 1; j < array.length+1; j++) {
            div.push(<Cell key={count++} number={index*j}/>);
            }
        }

        // let div = array.map(function(numX) {
        //     let num = array.map(function(numY) {
        //         return <Cell number={numY * numX} />;
        //     });
        //     num.push(<br />);
        //     return num;
        // });

        return <div>{div}</div>;
    }
}
