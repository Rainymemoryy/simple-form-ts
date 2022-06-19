import { useFieldArray, useFormContext } from 'react-hook-form'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import AddItem from './AddItem'
import Item from './Item'

const useGetValues = regName => {
  const { control } = useFormContext()
  const colArray = useFieldArray({
    control: control,
    name: regName + '.cols'
  })

  return {
    move: colArray.move,
    fields: colArray.fields,
    remove: colArray.remove,
    append: colArray.append
  }
}

export default function ColsEditing({ regName, type }: any) {
  const { move, fields, remove, append } = useGetValues(regName)

  return (
    <section aria-label='col' className='flex-1'>
      <p className='pl-8'>Nhập tên các cột</p>
      <DragDropContext
        onDragEnd={e => {
          e.source && e.destination && move(e.source.index, e.destination.index)
        }}
      >
        <Droppable droppableId={`vector-${regName}-cols`} type='cols'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`${snapshot.isDraggingOver && 'rounded bg-slate-50'}`}
            >
              {fields.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={`vector-${regName}-col[${index}]`}
                  index={index}
                >
                  {(provided, snapshot) => {
                    return (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <Item
                          provided={provided}
                          regVector={`${regName}.cols[${index}]`}
                          remove={remove}
                          index={index}
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

      <AddItem append={append} type={type} />
    </section>
  )
}
