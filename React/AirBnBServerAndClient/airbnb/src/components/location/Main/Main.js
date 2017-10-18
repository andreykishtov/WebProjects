import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import Owner from '../Owner/Owner';
import Reviews from '../Reviews/Reviews';

const Wrapper = styled.div`
    padding: 0px;
    // width: 500px;
`;

const Hr = styled.hr`
    // margin: 10px 0px;
    padding: 0px;
`;
const Sticky = styled.div`
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
`;

// const Wrapper = styled.div`
// display: flex;
// justify-content: space-around;
// `;

// const Hr = styled.hr`
// margin: 15px 0px 0 0;
// padding: 0px;
// `;

const Main = ({ data }) => {
    let { reviewsCount, reviews } = data;
    return (
        <Wrapper>
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

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// function createBase(x) {
//     return function (num) {
//         return num + x;
//     }
// }
