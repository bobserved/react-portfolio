import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Drag } from '../'

import './index.css'

const getListStyle = isDraggingOver => ({
  width: '100%',
  height: '50px',
  background: isDraggingOver ? 'lightblue' : '#fafafa',
  display: 'flex',
  overflow: 'auto',
  flex: '1 0 auto',
  justifyContent: 'flex-start',
  alignItems: 'center'
})

export const Drop = ({ id, list }) => (
  <Droppable droppableId={id} direction="horizontal">
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
        {...provided.droppableProps}
      >
        {list.map((item, index) => (
          <Drag id={id} key={index} item={item} index={index} />
        ))}
        {id === 'library' && list.length < 1 &&
          <h3 className='droppable__guide'>Empty!</h3>
        }
        {id === 'selection' && list.length < 1 &&
          <h3 className='droppable__guide'>Drop here!</h3>
        }
        {provided.placeholder}
      </div>
    )}
  </Droppable>
)