import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
Enzyme.configure({ adapter: new Adapter() })
import App from '../App';