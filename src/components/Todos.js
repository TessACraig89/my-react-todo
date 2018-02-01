import React, {Component} from 'react'
import Todo from './Todo'

/*When we write this component we know that if we pass it a todo, as a prop,
that has both an id and a body, that it will render. AND it will render the same way every time*/
class Todos extends Component {
  render(){
    /* todo property that will be passed in when component is used
    it takes each one and maps a Todo component to the variable todos, then renders
    We can use the map function to render multiple components for each individual todo and store them in a variable.
    We just need to make sure we bind this in case we need to access properties from the Todos component later*/
    // props being passed from one component to the next
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
        <p> hi</p>
      </div>
    )
  }
}

export default Todos
