import React, { Component } from 'react';
import NewTask from './NewTask'
import Task from "./Task";

class List extends Component {

    render() {
        return (
            <div className="List">
                <ul>
                    {
                        this.props.tasks.map((task) => {
                            return <Task id={task.id} desc={task.desc} status={task.status}/>
                        })
                    }
                </ul>
                <NewTask onSubmitData={this.props.onSubmitData}/>
            </div>
        );
    }

}

export default List