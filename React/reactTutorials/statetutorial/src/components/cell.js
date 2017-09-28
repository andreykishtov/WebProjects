import React, { Component } from 'react';

// export default class Cell extends Component {

//     render() {
//         return (
//         <div className="cell">
//             {this.props.number}
//         </div>
//         )
//     }

// }

// export default function(props) {
//     let { number } = props;
//     return <div className="cell">{number}</div>;
// }

export default function({ number }) {
    return <div className="cell">{number}</div>;
}