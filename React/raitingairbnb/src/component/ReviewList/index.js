import React from 'react';
import Review from '../Review';

const ReviewList = ({ reviewList }) => {
    let reviews = reviewList.map((object) => {
        let { name, text, rating } = object;
        return <Review rating={rating} name={name} text={text} />;
    });
    return <div>{reviews}</div>;
};

export default ReviewList;
