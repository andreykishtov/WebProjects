import React, { Component } from 'react';
import GoogleMaps from './GoogleMaps.js';
import Locations from './Locations.js';
import _ from 'lodash';
import PropTypes from 'prop-types';
export default class App extends Component {
    constructor() {
        super();
        this.state = { locations: [{ lng: 34, lat: 35 }] };
        this.onClickMap = this.onClickMap.bind(this);
        this.onClickLocation = this.onClickLocation.bind(this);
    }

    onClickMap(lng, lat) {
        let locations =this.state.locations; 
        locations.push({ lng, lat });
        this.setState(locations);
    }
    onClickLocation({lng, lat}) {
        let locations = this.state.locations.filter(function(element) {
            if (element.lng == lng && element.lat == lat) {
                return;
            }
            return element;
            
        });
        this.setState({locations});
    }

    render() {
        let { locations } = this.state;
        return (
            <div className='App'>
                <h1>My Map</h1>
                <GoogleMaps handleClick={this.onClickMap} lng={locations[0].lng} lat={locations[0].lat} />
                <Locations handleClickLocation={this.onClickLocation} locations={locations} />
            </div>
        );
    }
}
