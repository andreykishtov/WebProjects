import React from 'react';
import Cover from '../Cover/Cover';
import styled from 'styled-components';
import './Home.css';
import Main from '../Main/Main';
import BookForm from '../BookForm/BookForm';
import MapWithAMarker from '../../GoogleMaps/GoogleMaps';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            homeData: {
                address: {},
                amenities: [],
                theSpace: {},
                reviews: [{ userId: {} }],
                userId: { name: {} }
            }
        };
    }

    async componentDidMount() {
        try {
            let response = await fetch(
                `http://localhost:3001/api/locations/${this.props.match.params.homeId}`
            );
            let json = await response.json();
            this.setState({ homeData: json });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        let { price, currency, imageUrl,address } = this.state.homeData;
        return (
            <div>
                <Cover image={imageUrl} />
                <Wrapper>
                    <Main data={this.state.homeData} />
                    <BookForm price={price} currency={currency} />
                </Wrapper>
                <MapWithAMarker
                    location={address}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdtGPc2gg0Wh8UWRWDGDy8ChwLNyB5DnI"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px`, width: '800px', margin: '0 auto' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
