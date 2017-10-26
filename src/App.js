// @flow

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Motion, spring } from 'react-motion'
import {
  Home,
  About,
} from './layouts'
import logo from './logo.svg'
import './App.css'

const App = () => {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </header>  
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
}

export default App;
