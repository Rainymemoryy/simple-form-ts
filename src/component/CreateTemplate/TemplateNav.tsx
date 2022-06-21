import { Controller, useFormContext } from 'react-hook-form'
import { MdDragIndicator } from 'react-icons/md'
import { getItemByValue } from './SelectItemType'
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'

interface Props {
  fieldArray?: any
}

export default function TemplateNav({ fieldArray }: Props) {
  const { control } = useFormContext()
  return (
    <nav className='max-h-screen items-center p-6 '>
      <section
        aria-label='field name'
        className='flex w-full flex-col gap-2.5 rounded-md'
      >
        <div className='h-10 truncate rounded-md px-3 py-1.5 text-lg text-gray-500'>
          Danh sách câu hỏi
        </div>

        <div className='flex min-h-[500px] flex-col gap-1 rounded-lg border bg-white p-3'>
          <DragDropContext
            onDragEnd={e => {
              e.source &&
                e.destination &&
                fieldArray.move(e.source.index, e.destination.index)
            }}
          >
            <Droppable droppableId='6000' type='droppableItem'>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  className={`${
                    snapshot.isDraggingOver && 'rounded bg-slate-50'
                  }`}
                >
                  {fieldArray?.fields?.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                          >
                            <div className='relative '>
                              <div className='group relative left-1 flex items-center hover:bg-slate-50'>
                                <div
                                  className='flex h-10 w-10 items-center justify-center'
                                  {...provided.dragHandleProps}
                                  onClick={e => {
                                    e.stopPropagation()
                                  }}
                                >
                                  <MdDragIndicator className='h-6 w-6 opacity-50' />
                                </div>

                                <Controller
                                  control={control}
                                  name={`items[${index}].itemType`}
                                  render={({
                                    field: { onChange, onBlur, value, ref }
                                  }) => <>{getItemByValue(value)?.icon}</>}
                                />

                                <Controller
                                  control={control}
                                  name={`items[${index}].itemName`}
                                  render={({
                                    field: { onChange, onBlur, value, ref }
                                  }) => (
                                    <a
                                      className='w-full truncate py-1.5 px-3 text-lg'
                                      href={`#${index}`}
                                      key={item?.id}
                                    >
                                      {value}
                                    </a>
                                  )}
                                />

                                <div className='absolute left-1 h-1/2 w-1 rounded-full bg-slate-500 opacity-0 transition-opacity group-hover:opacity-100'></div>
                              </div>
                            </div>

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
        </div>
      </section>
    </nav>
  )
}
