import React, { Component } from 'react';

export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', age: '', email: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        this.props.onSerialize(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        required
                        name="name"
                        value={this.state.name}
                        onChange={e => {
                            this.handleChange(e);
                        }}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="text"
                        required
                        name="age"
                        value={this.state.age}
                        onChange={e => {
                            this.handleChange(e);
                        }}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        required
                        name="email"
                        value={this.state.email}
                        onChange={e => {
                            this.handleChange(e);
                        }}
                    />
                </label>
                <button type="submit" value="Submit">
                    Serialize
                </button>
            </form>
        );
    }
}
