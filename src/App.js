import React, { Component } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import ToDoList from './components/ToDoList';

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
        <AddForm setNewTodo={this.setNewTodo} addTodo={this.addTodo} state={this.state} />
        <ToDoList state={this.state} displayTodos={this.displayTodos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
