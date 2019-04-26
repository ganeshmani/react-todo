import React, { Component } from 'react'

export class TodoItem extends Component {

     

  
  render() {

       const isCompletedBtn = ()=>{
           return {
               display : this.props.todo.completed ? 'none' : 'inline-block'
           }
       }

       const isCompleted = () => {
           return {
               backgroundColor : this.props.todo.completed ? 'green' : ''
           }
       }
       
       
        return (
         
            <div className="item" style={isCompleted()}>
              <div className="right floated content">
                 
                  <div className="ui button" style={isCompletedBtn()} onClick={this.props.completeTask.bind(this,this.props.todo)}>
                     Mark as Completed
                  </div>
      
                  <div className="ui button" onClick={this.props.deleteTask.bind(this,this.props.todo)}>
                     Delete
                  </div>
                  
              </div>
      
              <div className="content">
                 
                   <h3>{this.props.todo.title} </h3> 
                 
                     
                  </div>
              </div>
             
          )
  }
}



export default TodoItem
