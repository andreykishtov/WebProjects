import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../consts/styledConsts';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '25%',
        left: '25%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const Button = styled.button`
    font-size: 20px;
    letter-spacing: 0.2px;
    padding-top: 6px;
    padding-bottom: 6px;
    color: #484848;
    background: none;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    outline: none;
    padding-left: 12px;
    padding-right: 12px;
    text-align: center;
    text-decoration: none;
    width: auto;
`;

const Input = styled.input`
    font-size: 15px;
    letter-spacing: 0.2px;
    padding-top: 6px;
    padding-bottom: 6px;
    color: #484848;
    background: none;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    display: inline-block;
    outline: none;
    margin-left:10px;
    padding-left: 12px;
    padding-right: 12px;
    text-align: center;
    text-decoration: none;
    width: auto;
`;

const Close = styled.a`
    float: left;
    color: #777;
    font: 14px/100% arial, sans-serif;
    position: absolute;
    right: 5px;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    top: 5px;
    :after {
        content: '✖';
        display: block;
        clear: both;
    }
`;

const Label =styled.label`
display:inline-block;
`

class City extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState({ value: value });
        this.props.handleOnChange(value);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    // afterOpenModal() {
    //     this.subtitle.style.color = '#f00';
    // }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <Button onClick={this.openModal}>Filter Appartments</Button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >   
                        <Close onClick={this.closeModal} />
                        <Label>Search By City
                    <Input
                        placeholder="Search By City"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    </Label>

                    {/* <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2> */}
                </Modal>
            </div>
        );
    }
}

export default City;
