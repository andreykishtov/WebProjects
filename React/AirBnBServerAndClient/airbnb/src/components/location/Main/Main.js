import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Owner from '../Owner/Owner';
import Reviews from '../Reviews/Reviews';

const Wrapper = styled.div`
    padding: 0px;
`;

const Hr = styled.hr`
    padding: 0px;
`;
const Sticky = styled.div`
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
`;

const Main = ({ data }) => {
    let { reviewsCount, reviews } = data;
    return (
        <Wrapper id="Overview">
            <Sticky>
                <Navbar />
                <Hr />
            </Sticky>
            <Owner data={data} />
            <Hr />
            <Reviews reviewsCount={reviewsCount} reviews={reviews} />
        </Wrapper>
    );
};

export default Main;