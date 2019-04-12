import React, {Component, Fragment} from 'react';

export default class Counter extends Component {
    
    showCounter = () => {

        let incompleteTodos = 0

        for(var i = 0; i<this.props.todos.length; i++){
            let currentTodo = this.props.todos[i]
            if(currentTodo.completed === false){
                incompleteTodos++
            }
        }

        // console.log(this.props.todos)
        if(incompleteTodos === 0){
            return <Fragment><p>No To-Dos Left!</p></Fragment>
        }
        if(incompleteTodos === 1){
            return <Fragment><p><b>{incompleteTodos}</b> To-Do left</p></Fragment>
        }
        if(incompleteTodos > 1){
            return <Fragment><p><b>{incompleteTodos}</b> To-Dos left</p></Fragment>
        }
    }
    
    render() {
        return(
            <div className="counter">
                {this.showCounter()}
            </div>
        )
    }
}