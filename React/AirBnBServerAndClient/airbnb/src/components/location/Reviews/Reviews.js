import React from 'react';
import Review from '../Review/Review';
import StarRatingComponent from 'react-star-rating-component';

const Reviews = ({ reviewsCount, reviews }) => {
    return (
        <div id="Reviews">
            {reviewsCount} Reviews <StarRatingComponent name="rate2" editing={false} starCount={5} value={3} />
            {reviews.map((review,index) => <Review key={index} review={review} />)}
        </div>
    );
};

export default Reviews;
