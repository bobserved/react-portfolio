import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import './index.css'

const grid = 16
const getItemStyle = (isDragging, draggableStyle) => ({
  width: '100%',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  padding: `0 ${grid}px`,
  color: isDragging ? '#fff' : '#222',
  fontFamily: 'roboto, sans-serif',
  flex: '1 0 auto',
  backgroundColor: isDragging ? 'lightgreen' : '',
  ...draggableStyle,
})

export const Drag = ({ item, index, id }) => (
  <Draggable key={item.id} draggableId={item.id} index={index}>
    {(provided, snapshot) => (
      <div style={{ flex: '1 0 auto' }}>
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {item.name}
        </div>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
)
 