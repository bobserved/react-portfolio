import React, { Component } from 'react'
import collection from './collection'
import { WORKS } from '../../constants'
import './index.css'

export class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedWork: {
        id: 1,
        name: 'phone'
      },
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
  selectWork = (work) => {
    this.setState({ selectedWork: WORKS.items.find(obj => obj.name === work) })
  }
  renderWork() {
    const Work = collection[this.state.selectedWork.name]
    return <Work {...this.state.phone} changeModel={this.changeModel} />
  }
  renderPreview(work) {
    return (
      <div>
        <h1>{work}</h1>
      </div>
    )
  }
  render() {
    let col = WORKS.items.length
    return (
      <div className='work'>
        <div className="boxes">
          {WORKS.items && WORKS.items.map((box, i) => {
            return (
            <div
              key={i}
              id={`box-${i}`}
              className="boxes__box"
              onMouseOver={() => i !== 0 && this.addClass(`box-${i}`)}
              onMouseLeave={() => i !== 0 && this.removeClass(`box-${i}`)}
              onClick={() => box.name && this.selectWork(box.name)}
              style={{
                background: box.img ? `black url(${box.img}) center/cover no-repeat` : (i === 0 ? 'transparent' : this.randomColor()),
                cursor: box.img ? 'pointer' : 'default'
              }}
            >
              {i === 0 && this.renderWork()}
              {box.name && this.renderPreview(box.name)}
            </div>
          )})}
        </div>
      </div>
    )
  }
}
