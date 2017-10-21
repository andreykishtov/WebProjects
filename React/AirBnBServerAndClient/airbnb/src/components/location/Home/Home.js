import React from 'react';
import Cover from '../Cover/Cover';
import styled from 'styled-components';
import './Home.css';
import Main from '../Main/Main';
import BookForm from '../BookForm/BookForm';
import MapWithAMarker from '../../GoogleMaps/GoogleMaps';
import Navbar from '../Navbar/Navbar';

const Sticky = styled.div`
    position: sticky;
    top: 0;
    background: white;
    z-index: 10;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Hr = styled.hr`
    margin: 15px 0px 0 0;
    padding: 0px;
`;

const StyledSticky = styled(Sticky)`background: white;`;
//////////////////////

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            homeData: {
                address: {},
                amenities: [],
                theSpace: {},
                reviews: [{userId:{}}],
                userId: {name:{}}
            }
        };
    }

    async componentDidMount() {
        try {
            let response = await fetch(`http://localhost:3001/api/locations/${this.props.match.params.homeId}`);
            let json = await response.json();
            this.setState({ homeData: json });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        console.log(this.state.homeData);
        let { price, currencyType, imageUrl } = this.state.homeData;
        return (
            <div>
                <Cover image={imageUrl} />
                <Wrapper>
                    <Main data={this.state.homeData} />
                    <BookForm price={price} currencyType={currencyType} />
                </Wrapper>
                <MapWithAMarker
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
