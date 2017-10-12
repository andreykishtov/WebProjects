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
            <Link to={`/${home._id}`}>
                <img src={home.imageUrl} alt="i am background" height="60%" width="100%" />
            </Link>
            <P>
                ₪{home.price}
                {home.title}
            </P>
            <P>
                {/* {home.type} {home.theSpace.bed} */}
                {home.type}
            </P>
            <P>
                <StarRatingComponent name="rate2" editing={false} starCount={5} value={rating} />
                {reviewsLength}
            </P>
        </div>
    );
};

export default Home;
