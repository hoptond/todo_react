import React, { Component } from 'react';
import NewTask from './NewTask'
import Task from "./Task";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //tasks is an array of objects, each with an id and desc properties
            tasks: props.tasks
        };
    }

    render() {
        return (
            <div className="List">
                <ul>
                    {
                        this.state.tasks.map((task) => {
                            return <Task id={task.id} desc={task.desc} status={task.status}/>
                        })
                    }
                </ul>
                <NewTask/>
            </div>
        );
    }
}

export default List