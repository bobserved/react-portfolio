import React, { Component } from 'react'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      library: [
        { id: 0, name: 'React' },
        { id: 1, name: 'React-Native' },
        { id: 2, name: 'CSS3' },
        { id: 3, name: 'Animations' },
        { id: 4, name: 'HTML5' },
      ],
      result: []
    }
  }
  addItem = (item) => {
    const arr = this.state.result
    let conditional = this.state.result.some(val => val.name === item.name)
    if (arr.indexOf(item) === -1) {
      arr.push(item);
    } else {
      let index = arr.indexOf(item);
      if (index !== -1) {
        arr.splice(index, 1);
      }
    }
    this.setState({ result: arr })
  }
  renderLib() {
    return this.state.library.map((item, i) => <li key={i} className="section__list-item" onClick={() => this.addItem(item)}>{item.name}</li>)
  }
  renderResult() {
    return this.state.result.map((item, i) => <li key={i} className="section__list-item" onClick={() => this.addItem(item)}>{item.name}</li>)
  }
  render() {
    console.log(this.state.result)
    return (
      <div className='main-container'>
        <div className="section section__library">
          <ul className="section__list">
            {this.renderLib()}
          </ul>
        </div>
        <div className="section section__result">
          <ul className="section__list">
            {this.renderResult()}
          </ul>
        </div>
      </div>
    )
  }
}
