import React from 'react';
import Location from './Location';
const Locations = ({ handleClickLocation, locations }) => {
    // console.log(locations);
    let locArr = locations.map(function(location) {
        let loc = (
            <div>
                <Location location={location} />
                <p onClick={() => handleClickLocation(location)}>X</p>
            </div>
        );
        return loc;
    });

    return <div className="locations">{locArr}</div>;
};

export default Locations;
