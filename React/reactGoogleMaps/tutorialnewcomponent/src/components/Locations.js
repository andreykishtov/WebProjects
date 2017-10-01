import React from 'react';
import Location from './Location';
const Locations = ({ handleClickLocation, locations }) => {
    let counter=0;

    let locArr = locations.map(location => (
        <div className="locations" key={counter++}>
            <Location key={counter++} location={location} />
            <p key={counter++} onClick={() => handleClickLocation(location)}>X</p>
        </div>
    ));

    return <div >{locArr}</div>;
};

export default Locations;
