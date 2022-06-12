import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'
import MemoItemLayout from '../../MemoItemLayout'

export default function MemoLayout() {
  const [isOpen, setOpen] = useState(false)
  return (
    <main className='flex-1 group'>
      <section
        className='flex cursor-pointer items-center'
        onClick={() => setOpen(!isOpen)}
      >
        <p className='text-sm text-gray-500'>Có thêm 10 tuỳ chọn</p>
        <ExpandMoreIcon
          className={`opacity-0  group-hover:opacity-100 ${
            isOpen && 'rotate-180'
          }`}
        />
      </section>
      {isOpen && (
        <DragDropContext onDragEnd={ee => {}}>
          <Droppable droppableId='611000' type='droppableItem'>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={`${
                  snapshot.isDraggingOver && 'rounded bg-slate-50'
                }`}
              >
                {[1, 2, 3].map((item, index) => (
                  <Draggable
                    key={`memo${item}`}
                    draggableId={`memo${item}`}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className='py-1'
                        >
                          <MemoItemLayout
                            key={item}
                            type={item}
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
      )}
    </main>
  )
}
