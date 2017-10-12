import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Owner from '../Owner/Owner'
import Reviews from '../Reviews/Reviews'
const Wrapper = styled.div`
    padding: 0px;
`;

const Hr = styled.hr`
    margin: 0px;
    padding: 0px;
`;

const Main = ({data}) => {
    let {reviewsCount,reviews} =data;
    return (
        <Wrapper>
            <Navbar />
            <Hr />
            <Owner data={data}/>
            <Reviews reviewsCount={reviewsCount} reviews={reviews} />
        </Wrapper>
    );
};

export default Main;
