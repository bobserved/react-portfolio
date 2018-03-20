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
  Work
} from './layouts'
import './styles/app.css'

const App = () => {
    return (
      <Router>
        <div>
          <div className="app-mobile">
            <h1 className="app-mobile__heading">Mobile version coming soon!</h1>
          </div>
          <div className="app">
            <header className="app-header">
              <ul className="app-nav">
                <li className="app-nav__item"><Link to="/">Home</Link></li>
                <li className="app-nav__item"><Link to="/work">Work</Link></li>
                <li className="app-nav__item"><Link to="/about">About</Link></li>
              </ul>
            </header>  
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/work" component={Work}/>
          </div>
        </div>
      </Router>
    )
}

export default App;
