import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

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
const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});
export class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [],
      selection: []
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }
  componentDidMount() {
    this.setState({ library: this.props.library })
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
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    console.log(this.state.selection)
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.library && this.state.library.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.name} – {index + 1}
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable2">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.selection && this.state.selection.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.name} – {index + 1}
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <button onClick={() => this.props.getItems(this.state.items)}>Get Items</button>
      </DragDropContext>
    );
  }
}

