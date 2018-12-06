import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            desc: props.desc,
            status: props.status
        };
    }

    render() {
        return (
            <li>
                <input type="checkbox" id={this.state.id} name={this.state.id} checked={this.getCheckedStatus()}/>
                    <span>{this.state.desc}</span>
            </li>
        );
    }

    getCheckedStatus() {
        if(this.state.status === true) {
            return 'checked'
        }
        return ''
    }
}

export default Task