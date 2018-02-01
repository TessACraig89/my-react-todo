//  simple React component
// curly braces? only importing a specific module of the react-router-dom and name spacing it within Route
import React, {Component} from 'react'

class TodosContainer extends Component {
  render(){
    return (
      <div className='todosContainer'>
        <h2>This is the todos container</h2>
      </div>
    )
  }
}

export default TodosContainer
