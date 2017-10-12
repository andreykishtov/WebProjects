import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import Icons from '../IconsComponent/icons'
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px;
`;

const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

const P = styled.p`padding: 5px;`;

const Desc = styled.p`
    width: 600px;
    text-align: start;
`;

const Owner = ({ data }) => {
    let { theSpace, title, type, address, reviewsCount, owner, generalDesc } = data;
    return (
        <Wrapper>
            <div>
                <h2>{title}</h2>
                <Wrapper>
                    <P>{type}</P> ·
                    <P>{address.city}</P>
                    <StarRatingComponent name="rate2" editing={false} starCount={5} value={2} />
                    <P>{reviewsCount} reviews</P>
                </Wrapper>
                <Icons theSpace={theSpace} />
                <Desc>{generalDesc}</Desc>
            </div>
            <div>
                <Avatar src={owner.imageUrl} />
                <p>{owner.name}</p>
            </div>
        </Wrapper>
    );
};

export default Owner;
