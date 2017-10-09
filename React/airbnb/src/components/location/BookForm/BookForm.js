import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, BorderDiv, Submit, Label, StyledDatePicker, Wrapper, Price } from './styledBookForm';

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = { startDate: '', endDate: '', guests: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, property) {
        this.setState({ [property]: event });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }

    render() {
        let { price, currencyType } = this.props;
        let { startDate, endDate, guests } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Price>
                    <p>
                        {currencyType}
                        {price} per night
                    </p>
                </Price>
                <BorderDiv>
                    <Wrapper>
                        <Label>
                            Check In
                            <StyledDatePicker placeholderText="MM/DD/YYYY" selected={startDate} onChange={e => this.handleChange(e, 'startDate')} />
                        </Label>
                        <Label>
                            Check Out
                            <StyledDatePicker placeholderText="MM/DD/YYYY" selected={endDate} onChange={e => this.handleChange(e, 'endDate')} />
                        </Label>
                    </Wrapper>
                    <div>
                        Guests
                        <input type="text" value={guests} onChange={e => this.handleChange(e.target.value, 'guests')} />
                    </div>
                    <Submit type="submit" value="Book" />
                    <p>You won’t be charged yet</p>
                </BorderDiv>
            </Form>
        );
    }
}

export default BookForm;
