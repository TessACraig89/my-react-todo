//  simple React component
// curly braces? only importing a specific module of the react-router-dom and name spacing it within Route
import React, {Component} from 'react'
import TodoModel from '../models/Todo'

class TodosContainer extends Component {
  render(){
    // we dont usually want to put this here
    TodoModel.all().then( (res) => {
      console.log(res);
    })
    // only doing it for testing
    return (
      <div className='todosContainer'>
        <h2>This is the todos container</h2>
      </div>
    )
  }
}

export default TodosContainer
