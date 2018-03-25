import React, {Component} from 'react';
import './App.css';
import NewTaskForm from './NewTaskForm.js';
import TaskList from "./TaskList";
import MiniSignal from 'mini-signals';

export const deleteTaskSignal = new MiniSignal();

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            tasks: []
        }
        this.taskFetch = this.taskFetch.bind(this);
    }

    taskFetch() {
        console.log("fetch", 1)
        fetch("http://localhost:8000/api/tasks/", {method:'GET', content: 'application/json'})
            .then(res =>res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        tasks: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.taskFetch();
        this.binding = deleteTaskSignal.add(this.taskFetch);
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="App">
                    <NewTaskForm/>
                    <TaskList items={this.state.tasks}/>
                </div>
            );
        }
    }
}

export default App;
