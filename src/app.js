// @flow

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {
  Home,
  About,
  Work,
  MatchMaker
} from './layouts'
import './styles/app.css'

const App = () => {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <ul className="app-nav">
              <li className="app-nav__item"><Link to="/">Home</Link></li>
              <li className="app-nav__item"><Link to="/work">Work</Link></li>
              <li className="app-nav__item"><Link to="/about">About</Link></li>
              <li className="app-nav__item"><Link to="/match-maker">WIP</Link></li>
            </ul>
          </header>  
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/work" component={Work}/>
          <Route path="/match-maker" component={MatchMaker}/>
        </div>
      </Router>
    )
}

export default App;
