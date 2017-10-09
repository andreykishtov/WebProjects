import React from 'react';

const Search = () => {
    let search = ['City', 'Guests', 'price', 'Date'].map(item => <p>{item}</p>);
    return <div>{search}</div>;
};

export default Search;
