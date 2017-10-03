import React from 'react';
import Task from './';
import faker from 'faker';
describe('<task />', () => {
    it('should have div', () => {
        const wrapper = shallow(<Task />);
        expect(wrapper.find('div').render()).to.have.length(1);
        expect(wrapper.find('div').hasClass('task')).to.equal(true);
    })
    
    it('should render tast with text', () => {
        let text = faker.lorem.word();
        const wrapper = shallow(<Task text={text} />);
        // console.log(wrapper.debug());
        expect(wrapper.find('div').text()).to.equal(text);
    })
});