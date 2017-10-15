import React, { Component } from 'react';
import styled from 'styled-components';
import Day from '../Day/Day'
const Squares = styled(Day)`
width:30px;
weight:30px;
`

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-column-gap: 1px;
grid-row-gap: 1px;
width: 10px;
height:50px
// padding:0 20px;
`
class componentName extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        let days=0;
        // let array = Array(7).fill(0).map(() => Array(4).fill(<Squares></Squares>))
        //() => (days <= 7) ? false : false
        let array = Array(31).fill(0).map(() =><Squares day={++days} key={days} taken={true} ></Squares>)
        return(
            <Wrapper>
                {array}
            </Wrapper>
        );
    }
}

componentName.propTypes = {

};

export default componentName;