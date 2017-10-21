import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../consts/styledConsts';
const Card = styled.div`
    text-align: left;
    padding: 10px 0px;
    margin: 5px;
    width: 400px;
`;

const Avatar = styled.img`
    border-radius: 50%;
    height: 60px;
    background-color: grey;
`;

const Text = styled.p`width: 90%;`;

const Review = ({ review }) => {
    return (
        <Card>
            <Wrapper>
                <Avatar src={review.userId.imageUrl} />
                <div>
                    <p>{review.name}</p>
                    <p>{review.date}</p>
                </div>
            </Wrapper>
            <Text>{review.content}</Text>
            <hr />
        </Card>
    );
};

export default Review;
