// @flow

import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import logo from './logo.svg';
import './App.css';
import ButtonPrimary from './components/Button/ButtonPrimary'
import ButtonSecondary from './components/Button/ButtonSecondary'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bobby-UI</h1>
        </header>
        <p className="App-intro">
          <ButtonPrimary onMouse={this.handleMouseDown} onTouch={this.handleTouchStart}>Primary</ButtonPrimary>
          <ButtonSecondary>Secondary</ButtonSecondary>
        </p>
        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }
        </Motion>
      </div>
    );
  }
}

export default App;
