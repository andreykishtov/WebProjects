import React from 'react';
import Search from '../Search/Search';
import HomesGrid from '../HomesGrid/HomesGrid';
import styled from 'styled-components';
import MapWithAMarker from '../../GoogleMaps/GoogleMaps';
// import HomesJson from '../../../consts/data.json';
import { Wrapper } from '../../../consts/styledConsts';

const StyledMapWithAMarker = styled(MapWithAMarker)`position: fixed;`;

class Homes extends React.Component {
    constructor(props) {
        super(props);

        this.state = { HomesOriginal: [], HomesFiltered: [] };
        this.FilterByCity = this.FilterByCity.bind(this);
    }

    async componentDidMount() {
        try {
            let response = await fetch('http://localhost:3001/api/locations');
            let json = await response.json();
            this.setState({ HomesOriginal: json, HomesFiltered: json });
        } catch (err) {
            console.log(err);
        }
    }

    FilterByCity(value) {
        let filtered = this.state.HomesOriginal.filter(item =>
            item.address.city.toLowerCase().includes(value.toLowerCase())
        );
        this.setState({ HomesFiltered: filtered });
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <Search handleOnChange={this.FilterByCity} />
                    <HomesGrid homes={this.state.HomesFiltered} />
                </div>
                {/* <StyledMapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdtGPc2gg0Wh8UWRWDGDy8ChwLNyB5DnI"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ width: '800px', margin: '0 auto' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                /> */}
            </Wrapper>
        );
    }
}

Homes.propTypes = {};

export default Homes;
