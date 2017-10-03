import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import enzyme, { mount,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowRenderer from 'react-test-renderer/shallow'

enzyme.configure({ adapter: new Adapter() });
describe('<app/>', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
    it('component should mount and get data', () => {
        const onWillMount = jest.fn();
        App.prototype.componentWillMount = onWillMount;
        mount(<App />)
        expect(onWillMount).toHaveBeenCalledTimes(1);
    });
    it('component should mount jasmine style', () => {
        spyOn(App.prototype,'componentWillMount').and.callThrough();

        const wrapper = mount(<App />);
        
        expect(wrapper).toBeDefined();
        expect(App.prototype.componentWillMount).toHaveBeenCalledTimes(1);
    });
});
