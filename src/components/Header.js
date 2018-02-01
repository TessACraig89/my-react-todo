import React, {Component} from 'react';
// link to another route
import {Link} from 'react-router-dom';




class Header extends Component{
  render(){
    return (
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/todos'}>Todos</Link>
      </header>
    )
  }
}

export default Header
