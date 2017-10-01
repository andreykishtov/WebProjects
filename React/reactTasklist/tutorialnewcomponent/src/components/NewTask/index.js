import React, { Component } from 'react';
export default class newTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = { taskName: '' };
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleTaskChange(e) {
        this.setState({ taskName: e.target.value });
    }

    handleAddClick() {
        let { addTask } = this.props;
        if (this.state.taskName != '') {
            addTask(this.state.taskName);
            this.setState({ taskName: ''});
        }
    }

    render() {
        return (
            <div>
                <input onChange={event => this.handleTaskChange(event)} value={this.state.taskName} />
                <button onClick={this.handleAddClick}>Add Task</button>
            </div>
        );
    }
}
