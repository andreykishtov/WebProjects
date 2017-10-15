import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../location/Home/Home';
import Homes from '../homes/Homes/Homes';
import Host from '../Host/Host';
import Help from '../Help/Help';
import Register from '../login/Register/Register';
import LoginScreen from '../login/LoginScreen/LoginScreen';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <NavBar />
                        <Route exact path="/" component={Homes} />
                        <Route path="/home/:homeId" component={Home} />
                        <Route path="/Help" component={Help} />
                        <Route path="/Host" component={Host} />
                        <Route path="/SignUp" component={Register} />
                        <Route path="/Login" component={LoginScreen} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;