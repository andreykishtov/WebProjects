import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Host from '../Host/Host';
import Help from '../Help/Help';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <NavBar />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Help" component={Help} />
                        <Route path="/Host" component={Host} />
                        <Route exact path="/SignUp" component={SignUp} />
                        <Route path="/Login" component={Login} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;