import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding-top:1em;
`;

const I = styled.i`
padding:0 1em 1em 1em;
:first-child {
    padding-left:0px;
}
`

const icons = ({theSpace}) => {
    return (
        <Wrapper>
            <I className="fa fa-users" aria-hidden="true" />
            {theSpace.guests} guests
            <I className="fa fa-home" aria-hidden="true" />
            {theSpace.beds} bedrooms
            <I className="fa fa-bed" aria-hidden="true" />
            {theSpace.bedrooms} beds
            <I className="fa fa-bath" aria-hidden="true" />
            {theSpace.bathroom} bathroom
        </Wrapper>
    );
};

export default icons;
