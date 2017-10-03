import React from 'react';
import './Review.css';
import styled from 'styled-components';
import THEME from '../../styles/theme';
import Rating from '../Rating/Rating';

const Card = styled.div`
    background-color: rgba(0, 55, 255, 0.09);
    padding: 10px;
    border: 1px solid black;
    margin: 5px;
    width: ${THEME.CARD.WIDTH};
    &:hover {
        border: 1px solid red;
        box-shadow: 0px 1px 6px #000;
        transition: 0.3s all;
    }
`;
const Title = styled.p`
    font-size: 21px;
    text-decoration: underline;
`;

const Avatar = styled.img`
    display: block;
    width: 40%;
    background-color: grey;
    margin: 0 auto 0 auto;
`;

const Text = styled.p`width: 90%;`;

const Review = ({ review }) => {
    return (
        <Card>
            <Avatar src={review.image} />
            <Title>{review.Title}</Title>
            <Text>{review.reviewText}</Text>
            <Rating rating={review.rating} />
        </Card>
    );
};

export default Review;
