import React, { Component } from 'react';

import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos : []
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => res.json())
    .then(data => this.setState({ todos : data }));
  }


  completeTask = (item) => {
    // console.log(item);
    fetch("https://jsonplaceholder.typicode.com/todos/"+item.id,{
      method : 'POST',
      body : JSON.stringify({
        id : item.id,
        userId : item.userId,
        title : item.title,
        completed : true
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => this.setState({ todos : this.state.todos.map(todo =>{
      if(todo.id === item.id){
        todo.completed = true;
      }
      return todo;
    })
  }))
  }

  deleteTask = (item) => {
    fetch('https://jsonplaceholder.typicode.com/todos/'+item.id, {
        method: 'DELETE'
      }).then(res => {
        this.setState({ todos : [...this.state.todos.filter(todo => todo.id !== item.id)] })
      })
  }

  addTask = (item) => {
    
  
    const task = {
      id : this.state.todos.length+1,
      userId : this.state.todos.length+1,
      title : item,
      completed : false
    }
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10",{
      method : 'POST',
      body : JSON.stringify({
        id : task.id,
        userId : task.userId,
        title : task.title,
        completed : task.completed
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(res => this.setState({ todos : [...this.state.todos,task] }))
  }


  render() {
    return (
      <div className="ui center aligned container" style={marginStyle}>
          <AddTodo key={this.state.todos.length+1} addTask={this.addTask}/>
          <Todos todos={this.state.todos} completeTask = {this.completeTask} deleteTask={this.deleteTask}/> 

      </div>
    
    );
  }
}

const marginStyle = {
  marginTop : '15px'
}

export default App;
