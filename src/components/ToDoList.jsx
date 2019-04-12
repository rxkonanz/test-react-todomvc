import App from '../App';
import React, {Component, Fragment} from 'react';

export default class ToDoList extends Component {
    
    // render to-do list from props
    render() {
        return(
            <div className={this.props.state.todos.length > 0 ? "todo-list" : "no-show"}>
                {this.props.displayTodos()}
            </div>
        )
    }

}