import React, { Component } from 'react';
export default class newTask extends React.Component {
    constructor(props) {
        super(props);
    }

    changeTaskInput(event) {
        this.taskValue = event.target.value;
        this.event=event.target;
    }
    render() {
        let { addTask } = this.props;
        let val;
        return (
            <div>
                <input onChange={event => this.changeTaskInput(event)} />
                <button
                    onClick={() => {
                        addTask(this.taskValue);
                        this.event.value='';
                    }}
                >
                    Add Task
                </button>
            </div>
        );
    }
}
