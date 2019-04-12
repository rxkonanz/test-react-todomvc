import React, { Component } from 'react';
import './styles/App.css';
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

  // function that adds new to-do to list
  addTodo = (e) => {
    let updatedTodos = [...this.state.todos]
    if(this.state.newTodo.text === ""){
      alert("No empty To-Do's allowed!")
      return
    }
    else {
      updatedTodos.push(this.state.newTodo)
      this.setState({
        todos: updatedTodos,
        newTodo: {completed: false, text: ""}
      })
    }
  }

  // function that deletes to-do at index i from list
  deleteTodo = (i) => {
    let shorterTodos = [...this.state.todos]
    shorterTodos.splice(i, 1)
    this.setState({
      todos: shorterTodos
    })
  }

  // function that displays all the todos in the to-do list
  displayTodos = () => {
    let todoList = this.state.todos.map((todo, i) => {
      const btnClass = this.state.isHovered ? "delete-button" : "no-show";
      return  <div className={this.state.todos[i].completed ? "completed-list-item" : "list-item"} key={i} onMouseEnter={this.handleHover} onMouseLeave={this.handleUnHover}>
                <input type="checkbox" className="completed-checkbox" onClick={()=>{this.completeTodo(i)}}/>
                <p className="list-item-text">{todo.text}</p>
                <button type="button" className={btnClass} onClick={()=>{this.deleteTodo(i)}}>X</button>
              </div>
    })
    return todoList
  }

  // function that handles when a todo is completed
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

  // function that handles hover
  handleHover = () => {
    this.setState({
      isHovered: true
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  // function that handles unhover
  handleUnHover = () => {
    this.setState({
      isHovered: false
    })
  }

  // function that handles text input from new to-do
  setNewTodo = (e) => {
    this.setState({
      newTodo: {completed: false, text: e.target.value}  
    })
  }

  // renders app
  render() {
    return (
      <div className="App">
        <AddForm setNewTodo={this.setNewTodo} addTodo={this.addTodo} handleSubmit={this.handleSubmit} state={this.state} />
        <ToDoList state={this.state} displayTodos={this.displayTodos} deleteTodo={this.deleteTodo} />
        <Counter state={this.state} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
