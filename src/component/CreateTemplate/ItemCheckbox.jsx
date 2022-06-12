import { Button, Checkbox } from '@mui/material'
import React from 'react'
import CheckboxOrRadioItem from './CheckboxOrRadioItem'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'
export default function ItemCheckbox() {
  return (
    <div>
      <DragDropContext onDragEnd={ee => {}}>
        <Droppable droppableId='61000' type='droppableItem'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`${snapshot.isDraggingOver && 'rounded bg-slate-50'}`}
            >
              {[0, 1, 2, 3, 4, 5].map((item, index) => (
                <Draggable
                  key={`checkItem${item}`}
                  draggableId={`checkItem${item}`}
                  index={index}
                >
                  {(provided, snapshot) => {
                    return (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <CheckboxOrRadioItem
                          key={index}
                          provided={provided}
                          snapshot={snapshot}
                        />
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className='flex items-center w-full relative'>
        <DragIndicatorIcon className='opacity-0' />
        <Checkbox disabled />

        <input
          className='input-text flex-1 h-8 truncate bg-transparent border-dashed'
          placeholder='Khác...'
          disabled
        />
      </div>

      <div className='flex items-center w-full relative'>
        <DragIndicatorIcon className='opacity-0' />
        <Checkbox disabled />
        <div className='flex gap-1 items-center flex-1'>
          <input
            className='input-text flex-1 h-8 truncate'
            placeholder='Thêm tuỳ chọn mới'
          />
          hoặc
          <Button
            className='button-default'
            sx={{
              textTransform: 'unset',
              fontSize: 16,
              fontWeight: '400'
            }}
          >
            <span className='text-center block'>thêm "Khác"</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
