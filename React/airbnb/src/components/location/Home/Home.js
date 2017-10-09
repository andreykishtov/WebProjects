import React from 'react';
import Cover from '../Cover/Cover';
import styled from 'styled-components';
import './Home.css';
import Main from '../Main/Main';
import data from '../../../consts/data.json';
import BookForm from '../BookForm/BookForm';
import MapWithAMarker from '../GoogleMaps/GoogleMaps';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Home = () => {
    let { price, currencyType } = data;
    return (
        <div>
            <Cover />
            <Wrapper>
                <Main data={data} />
                <aside>
                    <BookForm price={price} currencyType={currencyType} />
                </aside>
            </Wrapper>
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdtGPc2gg0Wh8UWRWDGDy8ChwLNyB5DnI"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px`, width: '800px', margin: '0 auto' }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
};

export default Home;
