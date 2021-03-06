import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Drop, Result } from '../../components'

// fake data generator
const getItems = count =>
  [
    { id: 0, content: 'React JS' },
    { id: 1, content: 'React Native' },
    { id: 2, content: 'Vanilla JavaScript' },
    { id: 3, content: 'CSS 3' },
    { id: 4, content: 'HTML5' },
    { id: 5, content: 'Python' },
  ]

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const reorderBoth = (oldList, newList, startIndex, endIndex) => {
  const oldArr = Array.from(oldList)
  const newArr = Array.from(newList)
  const [removed] = oldArr.splice(startIndex, 1);
  newArr.splice(endIndex, 0, removed);

  return {
    oldArr,
    newArr
  }
};

export class HorizontalDragndrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(6),
      library: [
        { id: '0', name: 'PHP', value: 10 },
        { id: '1', name: 'Vanilla JS', value: 80 },
        { id: '2', name: 'CSS3', value: 100 },
        { id: '3', name: 'HTML5', value: 100 },
        { id: '4', name: 'React Native', value: 100 },
        { id: '5', name: 'React.js', value: 100 },
        { id: '6', name: 'Vue JS', value: 10 },
        { id: '7', name: 'Angular JS', value: 10 },
        { id: '8', name: 'Python', value: 10 },
        { id: '9', name: 'Java', value: 10 },
        { id: '10', name: 'Swift', value: 10 },
        { id: '11', name: 'Animations', value: 100 }
      ],
      selection: [],
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  getScore = () => {
    const { selection } = this.state
    let bad = {type:'bad', value: 0}
    let awesome = {type:'awesome', value: 0}
    for(let i = 0; i < selection.length; i++) {
      if (selection[i].value < 51) {
        bad.value = bad.value + 1
      } else if(selection[i].value > 50) {
        awesome.value = awesome.value + 1
      } else {
        console.log('random')
      }
    }
    this.setState({ score: this.calculate(bad, awesome).toFixed(2) * 100 })
  }
  calculate = (bad, awesome) => {
    let data = [bad, awesome]
    let max = data.reduce((max, p) => p.value > max ? p.value : max, data[0].value)
    let highest = data.filter(d => d.value === max)
    if (highest[0].type === 'bad') {
      return 1 - (highest[0].value / this.state.selection.length)
    }
    else if (highest[0].type === 'awesome') {
      return highest[0].value / this.state.selection.length
    }
  }
  onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    let sourceIndex = result.source.index
    let destinationIndex = result.destination.index
    const { library, selection } = this.state
    let activeList = library.find(e => e.id === result.draggableId) ? library : selection;
    
    if (result.source.droppableId === result.destination.droppableId) { // MOVE SAME LIST
    
      if (activeList === library) {
        // LIBRARY
        const libraryList = reorder(
          library,
          sourceIndex,
          destinationIndex
        )
        this.setState({ library: libraryList })
      } else {
        // SELECTION
        const selectionList = reorder(
          selection,
          sourceIndex,
          destinationIndex
        )
        this.setState({ selection: selectionList })
      }
    } else { // MOVE DIFFERENT LISTS
      
      if (activeList === library) {
        // LIBRARY
        const list = reorderBoth(
          library,
          selection,
          sourceIndex,
          destinationIndex
        )
        this.setState({
          library: list.oldArr,
          selection: list.newArr
        })
      } else {
        // SELECTION  
        const list = reorderBoth(
          selection,
          library,
          sourceIndex,
          destinationIndex
        )
        this.setState({
          library: list.newArr,
          selection: list.oldArr
        })
      }
    }
    this.getScore()
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Drop id='library' list={this.state.library} />
        <Drop id='selection' list={this.state.selection} />
        <div className="section section__result">
          <h1>Skill chart</h1>
          {this.state.selection.length > 0 && <Result data={this.state.selection} />}
          {!this.state.selection.length > 0 && <div className='section__result-placeholder' />}
          <h1>Match score: {this.state.score ? this.state.score : 0}%</h1>
          <progress value={this.state.score} max="100" />
        </div>
      </DragDropContext>
    );
  }
}
