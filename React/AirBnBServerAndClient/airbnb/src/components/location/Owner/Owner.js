import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import Icons from '../IconsComponent/icons';
const Wrapper = styled.div`
    display: flex;
    justify-content: left;
    text-align: start;
`;
const WrapperInner = styled.div`
    display: flex;
    justify-content: left;
    text-align: start;
    > p {
        padding-top: 0px;
        padding-left: 1em;
    }
    > p:first-child {
        padding-top: 0px;
        padding-left: 0px;
    }
`;

const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;

const P = styled.p`padding-top: 1em;`;

const Desc = styled.p`width: 600px;`;

const H3 = styled.h3`// text-align:left;`;

const Owner = ({ data }) => {
    let { theSpace, title, type, address, reviewsCount, userId, generalDesc } = data;
    userId.name = userId.name || {};
    return (
        <Wrapper>
            <div>
                <h2>{title}</h2>
                <WrapperInner>
                    <P>{type}</P> ·
                    <P>{address.city}</P>
                    <StarRatingComponent name="rate2" editing={false} starCount={5} value={2} />
                    <P>{reviewsCount} reviews</P>
                </WrapperInner>
                <Icons theSpace={theSpace} />
                <Desc>{generalDesc}</Desc>
                <H3>The space</H3>
                {theSpace.description}
                <H3>Guest access</H3>
                <H3>Interaction with guests</H3>
                <H3>Other things to note</H3>
                <a href="#host">Contact host</a>
            </div>
            <div>
                <Avatar src={userId.imageUrl} />
                <p>
                    {userId.name.first} {userId.name.last}
                </p>
            </div>
        </Wrapper>
    );
};

export default Owner;
