import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from '../Login/Login';
import Register from '../Register/Register';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginScreen: {},
            loginMessage: '',
            buttonLabel: 'Register',
            isLogin: true
        };
    }

    handleClick(event) {
        if (this.state.isLogin) {
            this.setState({
                loginScreen: <Register parentContext={this} />,
                loginMessage: 'Already registered.Go to Login',
                buttonLabel: 'Login',
                isLogin: false
            });
        } else {
            this.setState({
                loginScreen: <Login parentContext={this} />,
                loginMessage: 'Not Registered yet.Go to registration',
                buttonLabel: 'Register',
                isLogin: true
            });
        }
    }

    componentWillMount() {
        this.setState({
            loginScreen: <Login parentContext={this} appContext={this.props.parentContext} />,
            loginMessage: 'Not registered yet, Register Now'
        });
    }

    render() {
        return (
            <div className="loginScreen">
                {this.state.loginScreen}
                <div>
                    {this.state.loginMessage}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={event => this.handleClick(event)} />
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

const style = {
    margin: 15
};

export default LoginScreen;
