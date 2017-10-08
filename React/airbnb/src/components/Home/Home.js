import React from 'react';
import Cover from './Cover/Cover';
import styled from 'styled-components';
import './Home.css';
import Main from './Main/Main';
import data from './data.json';
import BookForm from './Main/BookForm/BookForm';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Home = () => {
    let { price, currencyType, address } = data;
    const MapWithAMarker = withGoogleMap(props => (
            <GoogleMap defaultZoom={8} defaultCenter={{ lat: parseInt(address.lat), lng: parseInt(address.lng) }}>
                <Marker position={{ lat: parseInt(address.lat), lng: parseInt(address.lng) }} />
            </GoogleMap>
        ));
    return (
        <div>
            <Cover />
            <Wrapper>
                <Main data={data} />
                <aside>
                    <BookForm price={price} currencyType={currencyType} />
                </aside>
            </Wrapper>
            <MapWithAMarker containerElement={<div style={{ height: `300px` }} />} mapElement={<div style={{ height: `100%` }} />} />
        </div>
    );
};

export default Home;
