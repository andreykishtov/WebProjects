import React, { Component } from 'react';
import styled from 'styled-components';

const Squares = styled.div`
border 1px solid black;
`
class componentName extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        let array = Array(7).fill(0).map(x => Array(4).fill(<Squares></Squares>))
        // let squares = Array(7).fill(<Squares></Squares>)


        return(
            <div>
               {array}
            </div>
        );
    }
}

componentName.propTypes = {

};

export default componentName;