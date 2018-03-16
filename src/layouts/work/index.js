import React, { Component } from 'react'

import './index.css'

export class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      className: 'iphone-7',
      activeModel: 'iPhone 7',
      models: [
        {
          id: 0,
          name: 'iPhone 6',
          class: 'iphone-6'
        },
        {
          id: 1,
          name: 'iPhone 7',
          class: 'iphone-7'
        },
        {
          id: 2,
          name: 'iPhone X',
          class: 'iphone-x'
        }
      ]
    }
  }
  changeModel = (className, activeModel) => {
    this.setState({ className, activeModel })
  }
  render() {
    const { className, activeModel, models } = this.state
    return (
      <div className='work'>
        <div className='work__box'>
          <div className="work__btn-container">
          {models && models.map((model, i) => (
            <button key={i} className={`work__btn ${activeModel === model.name ? 'active' : ''}`} onClick={() => this.changeModel(model.class, model.name)}>{model.name}</button>
          ))
          }
          </div>
          <div className="phone">
            <div className={`phone__outer phone__outer--${className}`}> 
              <div className="speaker-container">
                <div className="speaker-container__speaker"></div>
              </div>
              <div className={`inner`}>
              </div>
              <div className="work-btn-container">
                <div className="work-btn-container__work-btn"></div>
              </div>  
            </div>
          </div>
        </div>
        <div className='work__box'>
        </div>
      </div>
    )
  }
}
