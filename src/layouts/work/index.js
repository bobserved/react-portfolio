import React, { Component } from 'react'

import './index.css'

export class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: [
        {id: 0},{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},
        {id: 6},{id: 7},{id: 8},{id: 9},{id: 10},{id: 11},
        {id: 12},{id: 13},{id: 14},{id: 15},{id: 16},{id: 17}
      ]
    }
  }
  addClass = (id) => {
    let el = document.getElementById(id)
    el.classList.add("work--translucent");
  }
  removeClass = (id) => {
    let el = document.getElementById(id)
    el.classList.remove("work--translucent");
  }
  renderBoxes() {

  }
  render() {
    const { boxes } = this.state
    return (
      <div className='work'>
        {boxes && boxes.map((box, i) => (
          <div
            id={box.id}
            className="work__box"
            onMouseOver={() => this.addClass(box.id)}
            onMouseLeave={() => this.removeClass(box.id)}
          ></div>
        ))}
      </div>
    )
  }
}
