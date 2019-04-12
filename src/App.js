import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      todos: ["roberto", "konanz", "baquerizo"],
      newTodo: ""
    }
  }

  addTodo = (e) => {
    let updatedTodos = [...this.state.todos]
    updatedTodos.push(this.state.newTodo)
    this.setState({
      todos: updatedTodos
    })
  }

  deleteTodo = (i) => {
    let shorterTodos = [...this.state.todos]
    shorterTodos.splice(i, 1)
    this.setState({
      todos: shorterTodos
    })
  }

  displayTodos = () => {
    let todoList = this.state.todos.map((todo, i) => {
      return  <div className="list-item" key={i}>
                <input type="checkbox" className="completed-box" />
                <p className="list-item-text">{todo}</p>
                <button type="button" className="delete-button" onClick={()=>{this.deleteTodo(i)}}>X</button>
              </div>
    })
    return todoList
  }

  setNewTodo = (e) => {
    this.setState({
      newTodo: e.target.value  
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <div className="new-item">
          <input type="text" className="new-item-input" value={this.state.newTodo} onChange={(e)=>{this.setNewTodo(e)}}/>
          <button type="button" className="add-button" onClick={(e)=>{this.addTodo(e)}}>+</button>
        </div>

        <div className="todo-list">
          {this.displayTodos()}
        </div>

      </div>
    );
  }
}

export default App;
