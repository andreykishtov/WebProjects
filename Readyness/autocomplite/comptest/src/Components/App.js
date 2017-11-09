import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import geolib from 'geolib';
import locations from '../data/snifim.json';
import Locations from './Locations';
import { Wrapper, Form, H1, Input } from './App.styled';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: 'Tel Aviv', locations: [], sortedLocations: [] };
    this.autoCompleteOnChange = this.autoCompleteOnChange.bind(this);
  }

  componentDidMount() {
    this.setState({ locations });
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    try {
      let address = await geocodeByAddress(this.state.address);
      let latLng = await getLatLng(address[0]);
      let locations = this.reArrangeJson(this.state.locations);
      let sortedLocations = this.sortArrayByDistance(latLng, locations);
      this.setState({ sortedLocations });
    } catch (error) {
      console.log(error);
    }
  };

  reArrangeJson(company) {
    return Object.keys(company).reduce((acc, branch) => {
      let companyArr = company[branch].map(branchItem => {
        let companyName = branch;
        return { ...branchItem, companyName };
      });

      return acc.concat(companyArr);
    }, []);
  }

  sortArrayByDistance(pivot, array) {
    let distanceArr = array.map(location => {
      let distance =
        geolib.getDistance(
          { latitude: pivot.lat, longitude: pivot.lng },
          { latitude: location.location.lat, longitude: location.location.lng }
        ) / 1000;
      return { ...location, distance };
    });

    distanceArr.sort((a, b) => a.distance - b.distance);

    return distanceArr;
  }

  calcClosestCompany() {
    let { sortedLocations } = this.state;

    let bestOne = sortedLocations.reduce((acc, curr) => {
      if (curr.distance < 200) {
        acc[curr.companyName] ? acc[curr.companyName]++ : (acc[curr.companyName] = 1);
      }
      return acc;
    }, {});
    var arr = Object.keys(bestOne).map(function(key) {
      return { key, value: bestOne[key] };
    });
    return arr.sort((a, b) => a.value < b.value)[0].key;
  }

  autoCompleteOnChange(address) {
    this.setState({ address });
  }

  render() {
    return (
      <Wrapper>
        <H1>Store Finder</H1>
        <Form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete
            styles={{
              autocompleteContainer: { display: 'block' },
              input: { boxSizing: 'border-box', background: '#F3F9FA' }
            }}
            inputProps={{
              value: this.state.address,
              onChange: this.autoCompleteOnChange
            }}
          />
          <Input type="submit" value="Find" />
        </Form>
        {!(this.state.sortedLocations.length === 0) && (
          <h2>The Closest Company Is {this.calcClosestCompany()}</h2>
        )}
        <Locations locations={this.state.sortedLocations} />
      </Wrapper>
    );
  }
}

export default App;
