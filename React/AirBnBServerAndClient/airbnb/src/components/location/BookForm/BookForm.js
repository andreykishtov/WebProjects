import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {
    PaddingDiv,
    Select,
    P,
    Form,
    BorderDiv,
    Submit,
    Label,
    StyledDatePicker,
    Wrapper,
    Price
} from './styledBookForm';

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
        let { price, currency } = this.props;
        let { startDate, endDate, guests } = this.state;
        return (
            <div style={{ position: "sticky",top: "0px"}}>
            <Form onSubmit={this.handleSubmit}>
                <Price>
                    <p>
                        {price} {' ' + currency + ' '} per night
                    </p>
                </Price>
                <PaddingDiv>
                    <Wrapper>
                        <Label>
                            Check In
                            <StyledDatePicker
                                placeholderText="MM/DD/YYYY"
                                selected={startDate}
                                onChange={e => this.handleChange(e, 'startDate')}
                            />
                        </Label>
                        <Label>
                            Check Out
                            <StyledDatePicker
                                placeholderText="MM/DD/YYYY"
                                selected={endDate}
                                onChange={e => this.handleChange(e, 'endDate')}
                            />
                        </Label>
                    </Wrapper>
                    <Label>
                        Guests
                        <Select onChange={e => this.handleChange(e.target.value, 'guests')} value={guests}>
                            <option>One Guest</option>
                            <option>Two Guest</option>
                            <option>Three Guest</option>
                            <option>Four Guest</option>
                            <option>Five Guest</option>
                        </Select>
                    </Label>

                    <Submit type="submit" value="Book" />
                    <P>You won’t be charged yet</P>
                </PaddingDiv>
            </Form>
            </div>
        );
    }
}

export default BookForm;
