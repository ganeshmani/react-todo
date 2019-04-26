import React, { Component } from 'react'

export class AddTodo extends Component {

  constructor(props){
      super(props);

      this.state = {
         
      }
  }  

  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }
  render() {
    return (

        <div className="ui fluid action input">
           <input type="text" name="title"  placeholder="Enter Task..." onChange={this.onChange} value={this.state.title}/>
         <div className="ui button" onClick={this.props.addTask.bind(this,this.state.title)} >Add</div>
        </div>        
    )
  }
}

export default AddTodo
