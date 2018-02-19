import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import './index.css'

const grid = 8
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // styles we need to apply on draggables
  ...draggableStyle
})

export const Drag = ({ item, index }) => (
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
          className={`draggable draggable--${snapshot.isDragging ? 'is-dragging' : 'default'}`}
        >
          {item.name} – {index + 1}
        </div>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
)
 