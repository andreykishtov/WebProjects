import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer';

configure({adapter:new Adapter()});

describe('Name of the group', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
});