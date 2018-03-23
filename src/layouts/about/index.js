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
            <a href='mailto:robert@bob-acken.com' target='_blank'>mail</a>
            <a href='https://www.instagram.com/bobserved' target='_blank'>instagram</a>
            <a href='https://www.facebook.com/robert.o.pettersson' target='_blank'>facebook</a>
            <a href='https://github.com/bobserved' target='_blank'>github</a>
          </div>
          <div className="top__item top__item--second" id='image'></div>
        </div>
      </div>
    )
  }
}
