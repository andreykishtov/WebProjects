import React from 'react';
import NewTask from './';

// const wrapper = shallow(<NewTask />).key();
// console.log(wrapper);

// import NewTask from './';
describe('<NewTask />', () => {    
    it('should have input', () => {
        const wrapper = shallow(<NewTask />);
        expect(wrapper.find('input')).to.have.length(1);
    })

    it("should be empty on start", () => {
        const wrapper = shallow(<NewTask />);
        expect(wrapper.find('input').prop("value")).to.equal("");
    })

    it("should be empty after add is clicked", () => {
        const wrapper = shallow(<NewTask addTask={() => {}}/>);

        wrapper.find("input").simulate("change",{target:{value:"testValue"}}) 
        wrapper.find("button").simulate("click")

        expect(wrapper.find("input").prop("value")).to.equal("")
    })

    it("should not add if input is empty", () => {
        const addTask = sinon.spy()
        const wrapper = shallow(<NewTask addTask={addTask}/>);
        
        wrapper.find("button").simulate("click")

        expect(addTask.called).to.equal(false)
    })

    it("should return the added todo when add clicked", () => {        
        const taskTitle = "testValue"
        const addTask = sinon.spy()
        const wrapper = shallow(<NewTask addTask={addTask}/>);
        
        wrapper.find("input").simulate("change",{target:{value:taskTitle}}) 
        wrapper.find("button").simulate("click")

        expect(addTask.calledWith(taskTitle)).to.equal(true)
    })

    it("should update state when input is added", () => {
        const wrapper = shallow(<NewTask />);
        const taskTitle = "testValue"
        
        wrapper.find("input").simulate("change",{target:{value:taskTitle}}) 

        expect(wrapper.state("taskName")).to.equal(taskTitle)
    })
});

// it("should call add when add is clicked")
// it("should update state when input is addded")
// const addTask = sinon.spy();
// const wrapper = shallow(<NewTask addTask={addTask} />);
// const input = wrapper.find('input');
// input.simulate('change', { target: { value: 'im a new task' } });
// expect(wrapper.find('input').prop('value')).to.equal("im a new task");

// wrapper.find('button').simulate('click');
// expect(addTask.calledOnce).to.equal(true);
// expect(wrapper.find('input').prop('value')).to.equal("");
