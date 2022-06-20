import { useFieldArray, useFormContext } from 'react-hook-form'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import AddItem from './AddItem'
import Item from './Item'

const useGetValues = regName => {
  const { control } = useFormContext()
  const rowArray = useFieldArray({
    control: control,
    name: regName + '.rows'
  })

  return {
    move: rowArray.move,
    fields: rowArray.fields,
    remove: rowArray.remove,
    append: rowArray.append
  }
}

export default function RowsEditing({ regName, type }: any) {
  const { move, fields, remove, append } = useGetValues(regName)
  return (
    <section aria-label='row' className='flex-1'>
      <p className='pl-8'>Nhập tên các hàng</p>
      <DragDropContext
        onDragEnd={e => {
          e.source && e.destination && move(e.source.index, e.destination.index)
        }}
      >
        <Droppable droppableId={`vector-${regName}-rows`} type='rows'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`${snapshot.isDraggingOver && 'rounded bg-slate-50'}`}
            >
              {fields.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <Item
                          provided={provided}
                          regVector={`${regName}.rows[${index}]`}
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
