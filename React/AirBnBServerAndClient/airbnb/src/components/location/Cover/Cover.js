import React from 'react';
import styled from 'styled-components';
const Cover = ({ image }) => {
    const Wrapper = styled.div`
        background: url(${image}) no-repeat center;
        height: 400px;
        background-size: cover;
    `;
    return <Wrapper />;
};

export default Cover;
