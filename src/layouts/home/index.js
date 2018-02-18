import React, { Component } from 'react'
import Card from '../../components/Card'
import { Drag } from './drag'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      library: [
        { id: '0', name: 'PHP' },
        { id: '1', name: 'Vanilla JS' },
        { id: '2', name: 'CSS3' },
        { id: '3', name: 'HTML5' },
        { id: '4', name: 'React Native' },
        { id: '5', name: 'React.js' },
        { id: '6', name: 'Vue JS' },
        { id: '7', name: 'Angular JS' },
        { id: '8', name: 'Python' },
        { id: '9', name: 'Java' },
        { id: '10', name: 'Swift' },
        { id: '11', name: 'Animations' }
      ],
      sortedItems: [],
      result: []
    }
  }
  addItem = (item) => {
    const arr = this.state.result
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
  getBackground() {
    if (this.state.result.length < 1) return 'red'
    if (this.state.result.length >= 1) return 'green'
  }
  renderLib() {
    return (
      <Drag getItems={this.getItems} library={this.state.library} />
    )
  }
  renderResult() {
    let val;
    return this.state.result.map((item, i) => {
      val = this.state.library.indexOf(this.state.library[i]) === item.level ? 'Match' : 'No match'
      return <li key={i} className="section__list-item" onClick={() => this.addItem(item)}>{item.name} – {item.level} – {val}</li>
    })
  }
  renderScore() {
    let score = 0
    for (let i = 0; i < this.state.result.length; i++) {
      score = score + this.state.result[i].level
    }
    return score
  }
  onChangeHandler = (e, item) => {
    this.setState({ library: this.state.library.map(el => el.name === item.name ?
      Object.assign({}, el, { name: e.target.value }) : el
    )})
  }
  getItems = (result) => {
    this.setState({ result })
  }
  render() {
    return (
      <div className='main-container'>
        <div className="section section__library">
          <ul className="section__list">
            {this.renderLib()}
          </ul>
        </div>
        <div className={`section section__result ${this.getBackground()}`}>
          {this.renderScore()}
          <ul className="section__list">
            {this.renderResult()}
          </ul>
        </div>
      </div>
    )
  }
}
