import React, { Component } from 'react';
import './todo.css';
import List from './List'
import './Update.js'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Blue Todo</h1>
                <List tasks={[{id: 1, desc: 'feed grass', status: false}, {id: 7, desc: 'mow cat', status: true}]}/>
            </div>
        )
    }
}

export default App;
