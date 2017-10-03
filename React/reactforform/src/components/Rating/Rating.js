import React from 'react';

const Rating = ({ rating }) => {
    if (rating < 0 || rating > 5) {
        return 'must be between 0 and 5';
    }
    let stars = Array.apply(null, Array(5)).map(
        (cell, index) => (index < rating ? <i className="fa fa-star" aria-hidden="true" /> : <i className="fa fa-star-o" aria-hidden="true" />)
    );

    return <div>{stars}</div>;
};

export default Rating;
