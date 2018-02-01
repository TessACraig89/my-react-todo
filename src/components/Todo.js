import React, {Component} from 'react'
import Todo from './Todo'

/*When we write this component we know that if we pass it a todo, as a prop,
that has both an id and a body, that it will render. AND it will render the same way every time*/
class Todos extends Component {
  render(){
    let todos = this.props.todos.map( (todo) => {
      return (
        <Todo
          key={todo._id}
          todo={todo}/>
      )
    })
    return(
      <div className="todos">
        {todos}
      </div>
    )
  }
}

export default Todos
