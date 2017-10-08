import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import '../../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 400px;
    flex-flow: wrap;
    position: relative;
    top: -71px;
    opacity: 0.8;
`;

const BorderDiv = styled.div`
    border: 1px solid lightgrey;
    width: 100%;
`;

const Submit = styled.input`
    width: 85%;
    height: 50px;
    background-color: #ff5a5f;
    color: #fff;
    border-radius: 4px;
    align-self: center;
    margin: 0 30px;
    border: 1px solid #ff5a5f;
    font-size: 20px;
`;

const Label = styled.label`padding-bottom: 8px;`;

const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    height: 35px;
    text-align: center;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Price = styled.div`
    background: #484848;
    width: 100%;
    padding: 10px;
    height: 50px;
`;

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = { startDate: moment(), endDate: moment() };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, property) {
        this.setState({ [property]: event });
        // this.setState({ [event.target.value]: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state);
        event.preventDefault();
    }

    render() {
        let { price, currencyType } = this.props;
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
                            <StyledDatePicker selected={this.state.startDate} onChange={e => this.handleChange(e, 'startDate')} />
                        </Label>
                        <Label>
                            Check Out
                            <StyledDatePicker selected={this.state.endDate} onChange={e => this.handleChange(e, 'endDate')} />
                        </Label>
                    </Wrapper>
                    <div>
                        Guests
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <Submit type="submit" value="Book" />
                    <p>You won’t be charged yet</p>
                </BorderDiv>
            </Form>
        );
    }
}

BookForm.propTypes = {};

export default BookForm;
