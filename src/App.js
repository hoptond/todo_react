import React, { Component } from 'react';
import './todo.css';
import List from './List'
import './Update.js'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
        this.getTasks = this.getTasks.bind(this)
        this.getTasks()
    }

    render() {
        let tasks = this.state.tasks
        return (
            <div>
                <h1>Blue Todo</h1>
                <List tasks={tasks} onSubmitData={this.getTasks}/>
            </div>
        )
    }

    async getTasks() {
        console.log('getting tasks')
        let response = await fetch('http://localhost:8080/todos/', {
            method: 'get'
        })
        let tasks = await response.json()
        this.setState({tasks: tasks})
    }
}

export default App;
