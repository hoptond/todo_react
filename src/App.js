import React, { Component } from 'react';
import './todo.css';
import List from './List'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Blue Todo</h1>
                <List />
            </div>
        )
    }
}

export default App;
