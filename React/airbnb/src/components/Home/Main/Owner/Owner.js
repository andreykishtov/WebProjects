import React from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

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

const MyP = styled.p`padding: 5px;`;

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
                    <MyP>{type}</MyP> ·
                    <MyP>{address.city}</MyP>
                    <StarRatingComponent name="rate2" editing={false} starCount={5} value={2} />
                    <MyP>{reviewsCount} reviews</MyP>
                </Wrapper>
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
                <Desc>{generalDesc}</Desc>
            </div>
            <div>
                <Avatar src="https://a0.muscache.com/im/users/15783413/profile_pic/1439146376/original.jpg" />
                <p>{owner.name}</p>
            </div>
        </Wrapper>
    );
};

export default Owner;
