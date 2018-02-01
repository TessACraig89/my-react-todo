// At the top import the component
import CreateTodoForm from '../components/CreateTodoForm'
//  simple React component
// curly braces? only importing a specific module of the react-router-dom and name spacing it within Route
import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import Todos from '../components/Todos'

class TodosContainer extends Component {
  // constructor() is basically a function that invokes when an instance of our class gets initialized. When we call super() were basically saying invoke the same constructor function that the React library defines for their constructor. In addition to that initialize a state for this component in which todos is a property and set its value as an empty array. We can then set the state any other time in our application using .setState().
  constructor(){
    super()
    this.state = {
      todos: []
    }
    // pass the createTodo function of THIS container component TO the CreateTodoForm component, bind(this) so that this is bound to the container component.
    this.createTodo = this.createTodo.bind(this);
  }
  // construct everything we need about a todo in an object and store it in a variable
  createTodo(todo) {
    let newTodo = {
        body: todo,
        completed: false
    }
    // pass newTodos object to a .create method on our TodoModel
    TodoModel.create(newTodo).then((res) => {
        let todos = this.state.todos
        let newTodos = todos.push(res.data)
        this.setState({newTodos})
    })
  }
  //This function leverages our model to retrieve our todos from our backend. In the promise of that request we set the state of this container component to have todos be the value returned from the response. Any time setState is invoked the component re-renders.
  //hooks are events that we can trigger functionality on, componentDidMount is a reserved hook that happens after a component renders
  componentDidMount(){
    this.fetchData()
  }
  // In the promise, we fetch all the todos and set the state to encapsulates those todos from the response
  fetchData(){
    TodoModel.all().then( (res) => {
      this.setState ({
        todos: res.data.todos,
        todo: ''
      })
    })
  }
  render(){
    return (
      <div className="todosComponent">
        {/*How does each individual todo know about the todo they need to render? From the state of the most parent container, TodosContainer*/}
        <Todos
          todos={this.state.todos} />
        {/* The argument passed in at the CreateTodoForm level(child) was state from that component. And now it updates state at the TodosContainer level(parent)*/}
        <CreateTodoForm
            createTodo={ this.createTodo }/>
      </div>
    )
  }
}

export default TodosContainer

///////////
//The state of the TodosContainer is simple, the todos
