import React, {Component} from 'react';
import Task from './Task.js';


class TaskList extends Component {
    constructor(props) {
        super(props)
        console.log('items', this.props.items)
    }

    render() {
        return (
            <div className="App">
                {this.props.items.map((item) => {if (item.text !== undefined) return (<Task key={item.index} item={item}/>)})}
            </div>
        );
    }
}

export default TaskList;
