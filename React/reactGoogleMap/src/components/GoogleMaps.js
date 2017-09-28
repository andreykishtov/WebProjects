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
            zoom: 8
        });
    }

    componentWillReceiveProps(nextProps) {
        this.map.setCenter({ lat: nextProps.lat, lng: nextProps.lng });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    render() {
        return (
            <div
                ref={el => {
                    this.$map = el;
                }}
                style={{ height: '90%' }}
            />
        );
    }
}

GoogleMaps.propTypes = {};

export default GoogleMaps;
