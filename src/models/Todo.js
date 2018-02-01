/*The Axios API is awesome! It's pretty intuitive!
When we use the all method on our TodoModel, it will make a get
request to our API for all todos. We return the request so that we can
chain promises to it.

all() is a static method, meaning it can be called without there being
an instance of the class containing the static method. This will allow us to call
all() in the following way (without instantiating the class with new)
:*/
import axios from 'axios'

class TodoModel {
  static all(){
    let request = axios.get("https://super-crud.herokuapp.com/todos")
    return request
  }
}

export default TodoModel
