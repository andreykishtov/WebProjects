import React from 'react';
import List from './';
import faker from 'faker';

describe('<List />', () => {
    it('should have div', () => {
        let tasks = [];
        const wrapper = shallow(<List tasks={tasks} />);
     
        expect(wrapper.find('div')).to.have.length(1);
    });
    it('should render the list component with children', () => {
        let tasks = [{ id: '1', title: 'testInput' }];
        const wrapper = shallow(<List tasks={tasks} />);
       
        expect(wrapper.find('div').hasClass('list')).to.equal(true);
        expect(wrapper.find('div').children()).to.have.length(tasks.length);
        expect(wrapper.find('div').children().at(1).exists()).to.equal(true);
        expect(wrapper.find('div').children().props().text).to.equal(tasks[0].title);
    });

    it('should not have children if given empty items array', () => {
        let tasks = [];
        const wrapper = shallow(<List tasks={tasks} />);
        expect(wrapper.find('div').children().length).to.equal(0);
        
    });

    it('should add a new task to 1 avalible task', () => {
        let tasks = [{ id: '1', title: 'testInput' }];
        const wrapper = shallow(<List tasks={tasks} />);
        expect(wrapper.find('div').children().at(0).props().text).to.equal(tasks[0].title);
        tasks.push({ id: faker.random.number(), title: faker.name.firstName() });
        // console.log(tasks);
        // console.log("search: ",wrapper.find('Task'));

        // wrapper.find('.foo').forEach((node) => {
        //     expect(node.hasClass('foo')).to.equal(true);
        //   });

        // expect(wrapper.update().find('div').forEach((node,index) => {
        //     console.log('11shit',expect(node.text()).to.equal(tasks[index].title))
            // expect(node.props().text).to.equal(tasks[index].title);
        // }));
        
    })
        //.children().at(1).props().text).to.equal(tasks[1].title);
    // });
    //wrapper.update().find('#counter').text()).to.equal('1');


});
