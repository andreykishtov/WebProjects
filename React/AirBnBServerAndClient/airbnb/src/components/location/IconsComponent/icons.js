import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px;
`;

const icons = ({theSpace}) => {
    return (
        <Wrapper>
            <i className="fa fa-users" aria-hidden="true" />
            {theSpace.guests} guests
            <i className="fa fa-home" aria-hidden="true" />
            {theSpace.beds} bedrooms
            <i className="fa fa-bed" aria-hidden="true" />
            {theSpace.bedrooms} beds
            <i className="fa fa-bath" aria-hidden="true" />
            {theSpace.bathroom} bathroom
        </Wrapper>
    );
};

export default icons;
