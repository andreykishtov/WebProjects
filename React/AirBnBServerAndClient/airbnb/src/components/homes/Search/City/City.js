import React from "react";

class City extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState({ value: value });
        this.props.handleOnChange(value);
    }

    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}

export default City;
