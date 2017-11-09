import React from 'react';
import createClass from 'create-react-class';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
// import MenuItem from 'material-ui/MenuItem';
import {
  // FormsyCheckbox,
  FormsyDate,
  FormsyRadio,
  FormsyRadioGroup,
  // FormsySelect,
  FormsyText,
  FormsyTime
  // FormsyToggle,
  // FormsyAutoComplete
} from 'formsy-material-ui/lib';

const Main = createClass({
  /**
   * As an alternative to `MuiThemeProvider` you can add a theme directly into context.
   * See the [Material-UI themes](http://www.material-ui.com/#/customization/themes) docs for details.
   *
   * childContextTypes: {
   *   muiTheme: PropTypes.object,
   * },
   * getChildContext(){
   *   return {
   *     muiTheme: getMuiTheme(),
   *   }
   * },
   */

  getInitialState() {
    return {
      canSubmit: false
    };
  },

  errorMessages: {
    wordsError: 'Please only use letters',
    numericError: 'Please provide a number',
    urlError: 'Please provide a valid URL'
  },

  styles: {
    paperStyle: {
      width: 300,
      margin: 'auto',
      padding: 20
    },
    switchStyle: {
      marginBottom: 16
    },
    submitStyle: {
      marginTop: 32
    }
  },

  enableButton() {
    this.setState({
      canSubmit: true
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false
    });
  },

  submitForm(data) {
    axios.post('http://localhost:9000/users',data);
  },

  notifyFormError(data) {
    console.error('Form error:', data);
  },

  render() {
    let { paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, numericError } = this.errorMessages;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Paper style={paperStyle}>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
            <FormsyText
              name="name"
              validations="isWords"
              validationError={wordsError}
              required
              hintText="What is your name?"
              floatingLabelText="Name"
            />
            <FormsyText
              name="age"
              validations="isNumeric"
              validationError={numericError}
              hintText="Are you a wrinkly?"
              floatingLabelText="Age (optional)"
            />
            <FormsyRadioGroup name="shipSpeed" defaultSelected="not_light">
              <FormsyRadio value="Male" label="Male" style={switchStyle} />
              <FormsyRadio value="Female" label="Female" style={switchStyle} />
            </FormsyRadioGroup>
            <FormsyDate name="date" required floatingLabelText="Date" />
            <FormsyTime name="time" required floatingLabelText="Time" />
            <RaisedButton style={submitStyle} type="submit" label="Submit" disabled={!this.state.canSubmit} />
          </Formsy.Form>
        </Paper>
      </MuiThemeProvider>
    );
  }
});

export default Main;
