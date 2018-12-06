import React, { Component } from 'react';
import './todo.css';
import List from './List'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Blue Todo</h1>
                <List tasks={[{id: 1, desc: 'feed grass', status: 0}, {id: 1, desc: 'feed grass', status: 0}]}/>
            </div>
        )
    }
}

export default App;
