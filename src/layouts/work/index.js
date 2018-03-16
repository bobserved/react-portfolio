import React, { Component } from 'react'
import { Phone } from './collection'
import './index.css'

export class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reserved: [2, 3, 4, 9, 10, 11, 16, 17, 18, 23, 24, 25],
      boxes: [...Array(28)].map((_, i) => ++i),
      works: [
        {
          id: 0,
          name: 'Phone'
        },
        {
          id: 1,
          name: 'Test'
        },
        {
          id: 2,
          name: 'Test 2'
        }
      ],
      col: 7,
      row: 4,
      phone: {
        className: 'iphone-7',
        activeModel: 'iPhone 7',
        models: [
          {
            id: 0,
            name: 'iPhone 7',
            class: 'iphone-7'
          },
          {
            id: 1,
            name: 'iPhone 8+',
            class: 'iphone-8'
          },
          {
            id: 2,
            name: 'iPhone X',
            class: 'iphone-x'
          }
        ]
      },
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
  changeModel = (className, activeModel) => {
    const { phone } = this.state
    phone.className = className
    phone.activeModel = activeModel
    this.setState({ phone })
  }
  selectWork = (index) => {
    this.setState({ selectedWork: this.state.works.find(obj => obj.id === index) })
  }
  renderWork() {
    return <Phone {...this.state.phone} changeModel={this.changeModel} />
  }
  render() {
    const { boxes, col, row, reserved } = this.state
    return (
      <div className='work'>
        <div className="boxes" style={{ gridTemplateColumns: `repeat(${col}, 1fr)` }}>
          {boxes && boxes.map((box, i) => {
            return (
            <div
              key={i}
              id={`box-${i}`}
              className="boxes__box"
              onMouseOver={() => i !== 2 && this.addClass(`box-${i}`)}
              onMouseLeave={() => i !== 2 && this.removeClass(`box-${i}`)}
              onClick={() => i !== 2 && this.selectWork(i)}
              style={{
                gridColumn: i < 7 ? i+1 : (i < 14 ? i - 6 : (i < 21 ? i - 13 : i - 20)),
                gridRow: i < 7 ? 1 : (i < 14 ? 2 : (i < 21 ? 3 : 4)),
                backgroundColor: reserved.includes(i) ? 'transparent' : this.randomColor()
              }}
            >
              {i === 2 && this.renderWork()}
            </div>
          )})}
        </div>
      </div>
    )
  }
}
