import React, {Component} from 'react';
import {deleteTaskSignal} from './App.js';

class Task extends Component {
    constructor(props) {
        super(props)
        this.deleteTask = this.deleteTask.bind(this)
    }

    deleteTask(event) {
        var form = new FormData();
        form.append("id", this.props.item.id);
        form.append("text", this.props.item.text);
        fetch("http://localhost:8000/api/task/" + this.props.item.id, {
            method: "DELETE",
            body: form
        }).then(() => deleteTaskSignal.dispatch());
    }

    render() {
        return (
            <div className="App">
                <p>{this.props.item.text}<button onClick={this.deleteTask}>Удалить</button></p>
            </div>
        );
    }
}

export default Task;
