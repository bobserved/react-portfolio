import React, { Component } from 'react'

import './index.css'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reserved: [2,5, 7, 8, 9, 11, 15, 19, 20, 21, 26, 27, 28, 29, 31, 32, 35, 39, 43, 45, 50, 53, 55, 56, 57, 59, 60, 61, 63, 64, 65, 67, 68, 69],
      boxes: [...Array(72)].map((_, i) => ++i)
    }
  }
  addClass = (id) => {
    let el = document.getElementById(id)
    el.classList.add("boxes--translucent");
  }
  removeClass = (id) => {
    let el = document.getElementById(id)
    el.classList.remove("boxes--translucent");
  }
  randomColor = () => {
    let length = 6;
    let chars = '0123456789ABCDEF';
    let hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }
  render() {
    const { boxes } = this.state
    return (
      <div className='home'>
        <div className="boxes">
          {boxes && boxes.map((box, i) => {
            return (
            <div
              key={i}
              id={`box-${i}`}
              className="boxes__box"
              onMouseOver={() => this.addClass(`box-${i}`)}
              onMouseLeave={() => this.removeClass(`box-${i}`)}
              style={{
                gridColumn: i < 24 ? i+1 : (i < 48 ? i - 23 : i - 47),
                gridRow: i < 24 ? 1 : (i < 48 ? 2 : 3),
                backgroundColor: this.state.reserved.includes(i) ? '#000' : this.randomColor(),
                transition: 'all 1s'
              }}
            ></div>
          )})}
        </div>
      </div>
    )
  }
}
