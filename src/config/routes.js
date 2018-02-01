import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import TodosContainer from '../containers/TodosContainer';

/*Switch component from react-router-dom to tell our app to switch between different routes, depending on the URL*/
//   <Switch>
//     {/* Route component, also given to us by react-router-dom to create a route for the root path('/'),
//      establish that the component that should be rendered here is a Home component */}
//     <Route exact path='/' component={ Home }/>
//     {/*There is a second route for the path /todos, which should route to a TodosContainer component*/}
//     <Route path='/todos' component={ TodosContainer }/>
//   </Switch>
export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/todos' component={ TodosContainer }/>
  </Switch>
)
