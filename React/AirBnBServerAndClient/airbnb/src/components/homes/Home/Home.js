import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const P = styled.p`text-align: left;`;

const Home = ({ home, index }) => {
    let reviewsLength = home.reviews.length;
    let rating = home.reviews.reduce((sum, review) => sum + review.rating, 0) / reviewsLength;

    return (
        <div key={index} style={{ height: '300px' }}>
            <Link to={`/home/${home._id}`}>
                <img src={home.imageUrl} alt="i am background" height="60%" width="100%" />
            </Link>
            <P>
                {home.currency+" "} 
                {home.price+" "} 
                {home.title+" "} 
                {"in " +home.address.city}
            </P>
            <P>
                {home.type} {` with ${home.theSpace.beds} beds`}
            </P>
            <div>
                <StarRatingComponent name="rate2" editing={false} starCount={5} value={rating} />
            </div>
        </div>
    );
};

export default Home;
