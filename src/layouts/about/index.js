import React, { PureComponent } from 'react'

export class About extends PureComponent {
  addClass = () => {
    var name = document.getElementById('image')
    name.className += " anim";
  }
  removeClass = () => {
    var name = document.getElementById('image')
    name.classList.remove("anim");
  }
  render() {
    return (
      <div className='main-container about'>
        <div className="top" onMouseOver={() => this.addClass()} onMouseLeave={() => this.removeClass()}>
          <div className="top__item top__item--first">
            <a href='mailto:robert@bob-acken.com'>mail</a>
            <a href='https://www.instagram.com/bobserved'>instagram</a>
            <a href='https://www.facebook.com/robert.o.pettersson'>facebook</a>
          </div>
          <div className="top__item top__item--second" id='image'></div>
        </div>
      </div>
    )
  }
}
