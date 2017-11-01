import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapWithAMarker = withScriptjs(
    withGoogleMap(props => {
        let lat = props.location.lat || 33;
        let lng = props.location.lng || 34;
        return (
            <GoogleMap defaultZoom={8} defaultCenter={{ lat: lat, lng: lng }}>
                <Marker position={{ lat: lat, lng: lng }} />
            </GoogleMap>
        );
    })
);

export default MapWithAMarker;
