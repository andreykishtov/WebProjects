import React from 'react';
import Review from '../Review/Review';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1040px;
    margin: 0px auto;
`;
const ReviewList = ({ reviews }) => {
    return <Wrapper>{reviews.map(review => <Review review={review} key={review.id} />)}</Wrapper>;
};

export default ReviewList;
