import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

global.expect = expect;
global.sinon = sinon;
// global.spy = spy;

global.shallow = shallow;