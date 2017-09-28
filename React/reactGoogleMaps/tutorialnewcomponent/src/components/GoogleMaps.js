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
            handleClick(event.latLng.lat(),event.latLng.lng());
        });
    }

    componentWillReceiveProps({ lat, lng }) {
        this.map.setCenter(lat, lng);
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
                <div ref={el => (this.$map = el)} style={{ height: '200px', width: '200px' }}>
                    I should be a map!
                </div>
            </div>
        );
    }
}

// GoogleMaps.propTypes = {};

export default GoogleMaps;
