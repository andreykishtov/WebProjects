import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../consts/styledConsts';
import City from './City/City'
import Guests from './Guests/Guests'
// let A = styled.a`
//     font-size: 30px;
//     padding: 0 10px;
// `;

let StyledWrapper = styled(Wrapper)`width: 1200px;`;

const Search = ({handleOnChange}) => {
    let search = [<City handleOnChange={handleOnChange} />, <Guests/>, '<Price/>', '<Date/>'].map((item, index) => item);
    return <StyledWrapper>{search}</StyledWrapper>;
};

export default Search;
