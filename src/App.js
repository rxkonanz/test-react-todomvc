import React, { Component } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import Counter from './components/Counter';
import ToDoList from './components/ToDoList';

class App extends Component {

  constructor(){
    super()
    this.state = {
      todos: [{completed: false, text: "clean dishes"}, {completed: false, text:"take out trash"}, {completed: false, text: "clean room"}],
      newTodo: {completed: false, text: ""},
      isHovered: false
    }
  }

  addTodo = (e) => {
    let updatedTodos = [...this.state.todos]
    updatedTodos.push(this.state.newTodo)
    this.setState({
      todos: updatedTodos,
      newTodo: {completed: false, text: ""}
    })
  }

  deleteTodo = (i) => {
    let shorterTodos = [...this.state.todos]
    shorterTodos.splice(i, 1)
    this.setState({
      todos: shorterTodos
    })
  }

  completeTodo = (i) => {
    let updatedTodos = [...this.state.todos]
    if(this.state.todos[i].completed === true){
      updatedTodos[i].completed = false
    }else {
      updatedTodos[i].completed = true
    }
    this.setState({
      todos: updatedTodos
    })
  }

  displayTodos = () => {
    let todoList = this.state.todos.map((todo, i) => {
      const btnClass = this.state.isHovered ? "delete-button" : "no-show";
      return  <div className= {this.state.todos[i].completed ? "completed-list-item" : "list-item"} key={i} onMouseEnter={this.handleHover} onMouseLeave={this.handleUnHover}>
                <input type="checkbox" className="completed-checkbox" onClick={()=>{this.completeTodo(i)}}/>
                <p className="list-item-text">{todo.text}</p>
                <button type="button" className={btnClass} onClick={()=>{this.deleteTodo(i)}}>X</button>
              </div>
    })
    return todoList
  }

  handleHover = () => {
    this.setState({
      isHovered: true
    })
  }

  handleUnHover = () => {
    this.setState({
      isHovered: false
    })
  }

  setNewTodo = (e) => {
    this.setState({
      newTodo: {completed: false, text: e.target.value}  
    })
  }

  render() {
    return (
      <div className="App">
        <AddForm setNewTodo={this.setNewTodo} addTodo={this.addTodo} state={this.state} />
        <ToDoList state={this.state} displayTodos={this.displayTodos} deleteTodo={this.deleteTodo} />
        <Counter todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
