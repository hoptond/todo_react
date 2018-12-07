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
                            return <Task id={task._id} desc={task.desc} status={task.status} onSubmitData={this.props.onSubmitData}/>
                        })
                    }
                </ul>
                <NewTask onSubmitData={this.props.onSubmitData}/>
            </div>
        );
    }

}

export default List