import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

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
    font-size: 15px;
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
       padding-left: 12px;
       padding-right: 12px;
       text-align: center;
       text-decoration: none;
       width: auto;
`;

class City extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
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

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <Button onClick={this.openModal}>Open Modal</Button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <Input
                        placeholder="Search By City"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />

                    <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
                    <Button onClick={this.closeModal}>close</Button>
                    <div>I am a modal</div>
                </Modal>
            </div>
        );
    }
}

export default City;
