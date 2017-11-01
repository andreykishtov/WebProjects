import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    async handleClick(event) {
        let apiBaseUrl = 'http://localhost:3001/api/users/';
        // let self = this;
        let payload = {
            email: this.state.username,
            password: this.state.password
        };
        let response = await axios.post(apiBaseUrl + 'signIn', payload);
        try {
            console.log(response);
            if (response.status === 200) {
                console.log('Login successfull');
                // let uploadScreen = [];
                // uploadScreen.push(<UploadScreen appContext={self.props.appContext} />);
                // self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen });
            } else if (response.status === 204) {
                console.log('Username password do not match');
                alert('username password do not match');
            } else {
                console.log('Username does not exists');
                alert('Username does not exist');
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
                        <Wrapper>
                        <AppBar title="Login" showMenuIconButton={false} />
                            <TextField
                                hintText="Enter your Username"
                                floatingLabelText="Username"
                                onChange={(event, newValue) => this.setState({ username: newValue })}
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
export default Login;
