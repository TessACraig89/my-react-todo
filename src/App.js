import React, { Component } from 'react';
// create a Header component to show up across all of our app's pages
import Header from './components/Header';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/*reference the routes in your config/routes.js file instea*/}
        { MyRoutes }
      </div>
    );
  }
}

export default App;
