import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            desc: props.desc,
            status: props.status
        };

        this.refreshPage = this.props.onSubmitData.bind(this)
    }

    submitData = (e) => {
        console.log(this.state)
        console.log('sent fetch data')
        fetch('http://localhost:8080/todos/' + this.state.id, {
            method: 'put',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status: !this.state.status})
        }).then(res => res.json())
            .then(res => console.log(res));
        this.refreshPage()
    }

    render() {
        return (
            <li>
                <input type="checkbox" id={this.state.id} name={this.state.id} checked={this.getCheckedStatus()} onClick={this.submitData}/>
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