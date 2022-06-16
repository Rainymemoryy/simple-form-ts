import { IconButton } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import ClearIcon from '@mui/icons-material/Clear'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useFieldArray, useFormContext } from 'react-hook-form'

export default function VectorEditing() {
  const methods = useFormContext()
  const { move, fields } = useFieldArray({
    control: methods.control,
    name: 'vector'
  })

  return (
    <div className='flex gap-3'>
      <section aria-label='hàng' className='flex-1 '>
        <DragDropContext
          onDragEnd={e => {
            e.source &&
              e.destination &&
              move(e.source.index, e.destination.index)
          }}
        >
          <Droppable droppableId={'321313213122312'} type='d3e12m'>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={`${
                  snapshot.isDraggingOver && 'rounded bg-slate-50'
                }`}
              >
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <Draggable
                    key={`check2Item${index}`}
                    draggableId={`checkI2tem${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <section
                            key={index}
                            className='group relative flex  w-full items-center'
                          >
                            <div
                              className='text-violet-400 opacity-70 group-hover:fill-violet-400 group-hover:opacity-100 '
                              {...provided.dragHandleProps}
                              onClick={e => {
                                e.stopPropagation()
                              }}
                            >
                              <DragIndicatorIcon />
                            </div>

                            <div className='flex h-[42px] w-[42px] items-center justify-center opacity-50'>
                              <CheckBoxOutlineBlankIcon />
                            </div>

                            <input
                              className='input-text h-8 flex-1 truncate group-hover:border-violet-400'
                              placeholder='Nhập tên hàng'
                            />

                            <div className='flex gap-1'>
                              <IconButton className='h-8 w-8 hover:text-violet-700'>
                                <ClearIcon
                                  fontSize='small'
                                  className='opacity-0 group-hover:opacity-100'
                                />
                              </IconButton>
                            </div>
                          </section>

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
      </section>

      <section aria-label='hàng' className='flex-1 '>
        <DragDropContext
          onDragEnd={e => {
            e.source &&
              e.destination &&
              move(e.source.index, e.destination.index)
          }}
        >
          <Droppable droppableId={'321313213122312'} type='d3e12m'>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={`${
                  snapshot.isDraggingOver && 'rounded bg-slate-50'
                }`}
              >
                {[1, 2, 3].map((item, index) => (
                  <Draggable
                    key={`check2Item${index}`}
                    draggableId={`checkI2tem${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <section
                            key={index}
                            className='group relative flex  w-full items-center'
                          >
                            <div
                              className='text-violet-400 opacity-70 group-hover:fill-violet-400 group-hover:opacity-100 '
                              {...provided.dragHandleProps}
                              onClick={e => {
                                e.stopPropagation()
                              }}
                            >
                              <DragIndicatorIcon />
                            </div>

                            <div className='flex h-[42px] w-[42px] items-center justify-center opacity-50'>
                              <CheckBoxOutlineBlankIcon />
                            </div>

                            <input
                              className='input-text h-8 flex-1 truncate group-hover:border-violet-400'
                              placeholder='Nhập tên hàng'
                            />

                            <div className='flex gap-1'>
                              <IconButton className='h-8 w-8 hover:text-violet-700'>
                                <ClearIcon
                                  fontSize='small'
                                  className='opacity-0 group-hover:opacity-100'
                                />
                              </IconButton>
                            </div>
                          </section>

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
      </section>
    </div>
  )
}
