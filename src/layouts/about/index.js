import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className="top">
          <div className="top__item top__item--first">
            <a href='mailto:robert@bob-acken.com'>mail</a>
            <a href='https://www.instagram.com/bobserved'>instagram</a>
            <a href='https://www.facebook.com/robert.o.pettersson'>facebook</a>
          </div>
          <div className="top__item top__item--second"></div>
        </div>
      </div>
    )
  }
}
