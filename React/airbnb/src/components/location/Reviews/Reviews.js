import React from 'react';
import Review from '../Review/Review';
import StarRatingComponent from 'react-star-rating-component';

const Reviews = ({ reviewsCount, reviews }) => {
    return (
        <div>
            {reviewsCount} Reviews <StarRatingComponent name="rate2" editing={false} starCount={5} value={3} />
            {reviews.map((review) => <Review key={review.id} review={review} />)}
        </div>
    );
};

export default Reviews;
