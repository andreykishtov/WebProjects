import React from 'react';
import Rating from '../Rating'
const componentName = ({name,text,rating}) => {
    return (
        <div>
            <p>{name}</p>
            <p>{text}</p>
            <Rating value={rating} />
        </div>
    );
};

export default componentName;
