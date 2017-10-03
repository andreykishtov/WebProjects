import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonForm from './PersonForm';
import QRCode from './QRCode';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { form: {} };
        this.onSerialize=this.onSerialize.bind(this);
    }

    onSerialize(form) {
      // console.log(this.state);
        this.setState({form});
        // console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                <h1>QR Serialize</h1>
                <div className ="form">
                <PersonForm onSerialize={this.onSerialize} />
                <QRCode code={this.state.form} />
                </div>
            </div>
        );
    }
}

export default App;

{
    /* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p> */
}
