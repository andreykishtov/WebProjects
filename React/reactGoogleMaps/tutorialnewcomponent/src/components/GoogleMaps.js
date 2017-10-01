import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleMaps extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    componentDidMount() {
        let { lat, lng } = this.props;
        this.map = new google.maps.Map(this.$map, {
            center: { lat, lng },
            zoom: 4
        });

        this.map.addListener('click', event => {
            let { handleClick } = this.props;
            let lat = event.latLng.lat();
            let lng = event.latLng.lng();
            handleClick(lat, lng);
            let string = `latitude ${lat} longitude ${lng}`;
            let div =<p>heysadasdasdsad</p>;
            this.infoWindow = new google.maps.InfoWindow({
                content: div
            });
            this.infoWindow.open(this.map);
        });
    }

    componentWillReceiveProps({ lat, lng }) {
        // this.map.setCenter(lat, lng);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <div>{this.infoWindow}</div>
                <div className="map" ref={el => (this.$map = el)}>
                    I should be a map!
                </div>
            </div>
        );
    }
}

export default GoogleMaps;
