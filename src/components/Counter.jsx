import React, {Component, Fragment} from 'react';

export default class Counter extends Component {

    showCounter = () => {
        
        // variable that counts how many incomplete to-do's there are
        let incompleteTodos = 0

        // loops through to-do's to see how many incomplete there are
        for(var i = 0; i<this.props.todos.length; i++){
            let currentTodo = this.props.todos[i]
            if(currentTodo.completed === false){
                incompleteTodos++
            }
        }

        // conditions to render correct counter text
        if(incompleteTodos === 0){
            return <Fragment><p className={this.props.state.todos.length > 0 ? "" : "no-show"}>No To-Do's left</p></Fragment>
        }
        if(incompleteTodos === 1){
            return <Fragment><p className={this.props.state.todos.length > 0 ? "" : "no-show"}><b>{incompleteTodos}</b> To-Do left</p></Fragment>
        }
        if(incompleteTodos > 1){
            return <Fragment><p className={this.props.state.todos.length > 0 ? "" : "no-show"}><b>{incompleteTodos}</b> To-Do's left</p></Fragment>
        }
    }
    
    // render Counter
    render() {
        return(
            <div className="counter">
                {this.showCounter()}
            </div>
        )
    }
}