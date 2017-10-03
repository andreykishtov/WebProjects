import React from 'react';
import App from './'
import faker from 'faker';
import 'jsdom-global/register';

describe('<App />', () => {
    it('should have div', () => {
        const wrapper = shallow(<App />);
        // console.log(wrapper.debug());
        expect(wrapper.find('div').children()).to.have.length(2);
    });

    it('should handle new task changes state ', () => {
        const wrapper = mount(<App />);
        // const newTask = { id: faker.random.number(), title: faker.lorem.word() };
        let newTask =faker.lorem.word();
        expect(wrapper.state().tasks).to.have.length(0);
        
        wrapper.instance().handleAddTask(newTask);
        expect(wrapper.state('tasks')[0].title).to.equal(newTask);
        newTask =faker.lorem.word();
        wrapper.instance().handleAddTask(newTask);
        expect(wrapper.state('tasks')[1].title).to.equal(newTask);

    });
});