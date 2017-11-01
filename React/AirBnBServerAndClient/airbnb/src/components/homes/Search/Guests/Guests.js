import React from 'react';
// import NumberPicker from 'semantic-ui-react-numberpicker';

class Guests extends React.Component {
    constructor(props) {
        super(props);

        this.state = { numberPickerValue: '' };
    }

    updateNumberPicker(e) {
        this.setState({ numberPickerValue: e.value + '' });
    }

    render() {
        return (
            <div>
                {/* <NumberPicker name="numberPicker" value={this.state.numberPickerValue} onChange={this.updateNumberPicker} /> */}
            </div>
        );
    }
}

Guests.propTypes = {};

export default Guests;
