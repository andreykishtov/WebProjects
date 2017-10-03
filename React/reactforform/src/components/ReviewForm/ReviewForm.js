import React, { Component } from 'react';
import styled from 'styled-components';
import './ReviewForm.css';
const Header = styled.h1`text-decoration: underline;`;
const FormWrapper = styled.form`width: 1040px;`;

const Wrapper = styled.div`
    width: 1040px;
    text-align: center;
    margin: 0px auto;
`;

const Add = styled.button`
    background-color: #28aadc;
    outline-width: 0;
    border-radius: 28px;
    border: 1px solid #18ab29;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 17px;
    padding: 16px 31px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #2f6627;
    &:hover {
        background-color: rgb(74, 141, 173);
    }
    $:active {
        position: relative;
        top: 1px;
    }
`;

const Content = styled.textarea`
    text-align: center;
    width: 700px;
    height: 50px;
    outline-width: 0;
    padding: 1.05rem 2.75rem;

    color: #28aadc;
    background-color: #fff;
    font-size: 1.2rem;
    border-radius: 12rem;
    border: 0.2rem solid #28aadc;
`;

const InputTitle = styled.input`
    text-align: center;
    outline-width: 0;
    padding: 1.05rem 2.75rem;
    color: #28aadc;
    background-color: #fff;
    font-size: 1.2rem;
    font-weight: 300;
    border-radius: 12rem;
    border: 0.2rem solid #28aadc;
    transition: color 0.3s, border 0.3;
    margin: 10px 0px;
`;

const MySelect = styled.select`
    width: 350px;
    outline-width: 0;
    height: 40px;
    border-radius: 20px;
    box-shadow: 1px 1px 11px #330033;
    background: #28aadc;
`;

const MyOptions = styled.option`
    text-align: center;
    outline-width: 0;
    height: 40px;
    border-radius-top: 20px;
`;

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { title: '', content: '', select: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleOnSubmit(this.state);
    }

    render() {
        let review = Array.apply(null, Array(5)).map((x, index) => <MyOptions key={index * index}>{index + 1}</MyOptions>);
        return (
            <Wrapper>
                <Header>This is Form</Header>
                <FormWrapper onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Enter Name:<InputTitle name="title" required type="text" onChange={this.handleChange} value={this.state.title} />
                        </label>
                        <MySelect onChange={this.handleChange} name="select" value={this.state.select}>
                            {review}
                        </MySelect>
                        <Add ClassName="myButton" type="submit" value="Submit">
                            Add Review
                        </Add>
                    </div>
                    <label>
                        Write Content Here:<Content name="content" required type="text" onChange={this.handleChange} value={this.state.content} />
                    </label>
                </FormWrapper>
            </Wrapper>
        );
    }
}

export default ReviewForm;
