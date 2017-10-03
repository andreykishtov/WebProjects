import React from 'react';
import {configure,enzyme, mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })
import Rating from './';


describe('<rating />', () => {
    it('should create rating of 0 with no value', () => {
        const wrapper = shallow(<Rating value={0} />);
        expect(wrapper.find('i')).to.have.length(5);
    });

    // it('should create rating of number with value=number', () => {
        
    // });

    // it('should throw an error ', () => {
        
    // });
});