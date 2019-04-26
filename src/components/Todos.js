import React, { Component } from 'react'
import TodoItem from './TodoItem';
export class Todos extends Component {

  constructor(props){
      super(props);
      this.state = {

      }
  }  

  render() {
    let todoItem;
    if(this.props.todos){
        
        todoItem = this.props.todos.map(todo => {
            return(
                <TodoItem key={todo.id} todo={todo} completeTask={this.props.completeTask} deleteTask={this.props.deleteTask}/>
            ); 
        })
    }
    return (
        <div className="ui middle aligned divided list">
             {todoItem}
        </div>
     
    )
  }
}

export default Todos
