import React, { Component } from 'react';

class NewTask extends Component {

    submitData(e) {
        e.preventDefault()
        if(document.getElementById('newtask').value === '') {
            console.log('field empty, not submitting')
            return
        }
        console.log('sent fetch data')
        fetch('http://localhost:8080/todos/', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({desc: document.getElementById('newtask').value, status:false})
        }).then(res => res.json())
            .then(res => console.log(res));
        document.getElementById('newtask').value = ''
    }

    render() {
        return (
            <form onSubmit={this.submitData}>
                <li>
                    <input name="desc" id="newtask" ref={(input) => this.textInput = input} type="text" placeholder="Enter a new task here..."/>
                        <input type="submit" value="SUBMIT" onClick={this.props.onClick}/>
                </li>
            </form>
        );
    }
}

export default NewTask