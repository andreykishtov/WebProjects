import React, { Component } from 'react';
import List from '../List';
import NewTask from '../NewTask'
export default class App extends Component {
    constructor () {
        super()

        this.state = { tasks : [] }
        this.handleAddTask = this.handleAddTask.bind(this);
        this.id = 0;
    }

    handleAddTask (title) {
        let {tasks} = this.state
        this.id=this.id+1;
        tasks.push({id:this.id, title})
        this.setState({tasks})
    }
    
    render() {
        return (<div>
            <NewTask addTask={this.handleAddTask}></NewTask>
            <List tasks={this.state.tasks} />
            </div>)
    }
}
