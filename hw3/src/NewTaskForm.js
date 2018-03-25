import React, {Component} from 'react';

class NewTaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskTextField: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event) {
        console.log('tasktext', event.target.value);
        this.setState({taskTextField: event.target.value});
    }

    onSubmit(event) {
        var form = new FormData();
        form.append("text", this.state.taskTextField);
        fetch("http://localhost:8000/api/tasks/", {
            method: "POST",
            body: form
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="task" value={this.state.taskTextField} onChange={this.onChange}></input>
                <button>Создать</button>
            </form>
        );
    }
}

export default NewTaskForm;
