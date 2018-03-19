import React, { Component } from 'react'
import { HorizontalDragndrop } from '../../components'

import './index.css'

export class MatchMaker extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <HorizontalDragndrop />
  }
}
