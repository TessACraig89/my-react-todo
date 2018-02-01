import React, {Component} from 'react'

class Todo extends Component {
  render(){
    return(
      // props being passed from one component to the next
      <p data-todos-index={this.props.todo.id}>
        <span>{this.props.todo.body}</span>
      </p>
    )
  }
}

export default Todo
