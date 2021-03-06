import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
    }

    async handleClick(event) {
        let apiBaseUrl = 'http://localhost:3001/api/users/';
        // let self = this;
        let payload = {
            // first_name: this.state.first_name,
            // last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };
        let response = await axios.post(apiBaseUrl + 'signUp', payload);
        try {
            console.log(response);
            if (response.status === 200) {
                console.log('registration successfull');
                // var loginscreen = [];
                // loginscreen.push(<Login parentContext={this} />);
                // var loginmessage = 'Not Registered yet.Go to registration';
                // self.props.parentContext.setState({
                //     loginscreen: loginscreen,
                //     loginmessage: loginmessage,
                //     buttonLabel: 'Register',
                //     isLogin: true
                // });
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Register" showMenuIconButton={false} />
                        <Wrapper>
                            <TextField
                                hintText="Enter your First Name"
                                floatingLabelText="First Name"
                                onChange={(event, newValue) => this.setState({ first_name: newValue })}
                            />
                            <TextField
                                hintText="Enter your Last Name"
                                floatingLabelText="Last Name"
                                onChange={(event, newValue) => this.setState({ last_name: newValue })}
                            />
                            <TextField
                                hintText="Enter your Email"
                                type="email"
                                floatingLabelText="Email"
                                onChange={(event, newValue) => this.setState({ email: newValue })}
                            />
                            <TextField
                                type="password"
                                hintText="Enter your Password"
                                floatingLabelText="Password"
                                onChange={(event, newValue) => this.setState({ password: newValue })}
                            />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={event => this.handleClick(event)} />
                        </Wrapper>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15
};
export default Register;
