import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//wrapping our App Component in a BrowserRouter component available to us from react-router-dom
import { BrowserRouter } from 'react-router-dom';
//
import App from './App';

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'))
