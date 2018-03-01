import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Drag } from '../'

import './index.css'

const grid = 8
const getListStyle = isDraggingOver => ({
  padding: grid
})

export const Drop = ({ id, list }) => (
  <Droppable droppableId={id}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
        className={`droppable droppable__${id}--${snapshot.isDraggingOver ? 'is-dragging' : 'default'}`}
      >
        {list && list.map((item, index) => (
          <Drag id={id} key={index} item={item} index={index} />
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
)