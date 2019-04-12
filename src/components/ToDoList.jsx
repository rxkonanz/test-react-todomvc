import App from '../App';
import React, {Component, Fragment} from 'react';

export default class ToDoList extends Component {
    render() {
        return(
            <div className="todo-list">
                {this.props.displayTodos()}
            </div>
        )
    }

}