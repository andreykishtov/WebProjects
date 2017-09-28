import React from 'react';

const Location = ({ location }) => {
    let { lng, lat } = location;
    return (
        <div>
            <p>
                Longitude:{lng} and Latitude{lat}
            </p>
        </div>
    );
};

export default Location;
