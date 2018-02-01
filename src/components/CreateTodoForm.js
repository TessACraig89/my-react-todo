import React, {Component} from 'react'

class CreateTodoForm extends Component {
  constructor(){
    super()
    //sets the initial state of the form via the constructor! that's the constructor's job :)
    this.state = {
      todo: ''
    }
    // Don't let this part scare you; it does something simple.
    // When we go into a new function, that normally changes our context therefore changing what 'this' points to.
    // The next to lines use the function .bind so that 'this' in onInputChange and onFormSubmit still points to 'this' here in CreateTodoForm. More on bind below:
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  //set the state of this component to have a property of todo and it's value is whatever the input field's value is
  onInputChange(event){
    this.setState({
      todo: event.target.value
    })
  }
  onFormSubmit(event){
    //prevent the default action as form submission will cause a request to fire
    event.preventDefault()
    // instantiate a variable todo from the state
    let todo = this.state.todo
    // pass createTodo from the container as props
    this.props.createTodo(todo)
    // set the todo property of the state as an empty string
    this.setState({
      todo: ""
    })
  }
  render(){
    return (
      <div className='createForm todoForm'>
        <h2>Create Todo Here!</h2>
        {/*.onFormSubmit function passes an anonymous function with an event argument*/}
        <form onSubmit={ this.onFormSubmit }>
          <input
            onChange={ this.onInputChange }
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />
          <button type='submit'>Create Todo!</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm
