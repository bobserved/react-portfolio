import React, { Component } from 'react'
import Card from '../../components/Card'
import { Drag } from './drag'

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      library: [
        { id: '0', name: 'React.js', level: 5 },
        { id: '1', name: 'React Native', level: 5 },
        { id: '2', name: 'HTML5', level: 5 },
        { id: '3', name: 'CSS3', level: 4 },
        { id: '4', name: 'Vanilla JS', level: 4 },
        { id: '5', name: 'PHP', level: 2 }
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
      <Drag getItems={this.getItems} items={this.state.library}>
        <Card text='Drag me!' />
      </Drag>
    )
  }
  renderResult() {
    return this.state.result.map((item, i) => <li key={i} className="section__list-item" onClick={() => this.addItem(item)}>{item.name}</li>)
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
          <ul className="section__list">
            {this.renderResult()}
          </ul>
        </div>
      </div>
    )
  }
}
