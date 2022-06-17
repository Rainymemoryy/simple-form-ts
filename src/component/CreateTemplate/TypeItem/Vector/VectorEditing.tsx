import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useFieldArray, useFormContext } from 'react-hook-form'
import AddItem from './AddItem'
import Item from './Item'

export default function VectorEditing({ regName }: any) {
  const methods = useFormContext()

  const rowArray = useFieldArray({
    control: methods.control,
    name: regName + '.rows'
  })
  const colArray = useFieldArray({
    control: methods.control,
    name: regName + '.cols'
  })

  return (
    <div className='flex gap-3'>
      <section aria-label='row' className='flex-1 '>
        <p>Nhập tên các hàng</p>
        <DragDropContext
          onDragEnd={e => {
            e.source &&
              e.destination &&
              rowArray.move(e.source.index, e.destination.index)
          }}
        >
          <Droppable droppableId={`vector-${regName}-rows`} type='rows'>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={`${
                  snapshot.isDraggingOver && 'rounded bg-slate-50'
                }`}
              >
                {rowArray.fields.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={`vector-${regName}-row[${index}]`}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <Item
                            provided={provided}
                            regVector={`${regName}.rows[${index}]`}
                            remove={rowArray.remove}
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
        <AddItem append={rowArray.append} remove={rowArray.remove} />
      </section>

      <section aria-label='col' className='flex-1'>
      <p>Nhập tên các cột</p>
        <DragDropContext
          onDragEnd={e => {
            e.source &&
              e.destination &&
              colArray.move(e.source.index, e.destination.index)
          }}
        >
          <Droppable droppableId={`vector-${regName}-cols`} type='cols'>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={`${
                  snapshot.isDraggingOver && 'rounded bg-slate-50'
                }`}
              >
                {colArray.fields.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={`vector-${regName}-col[${index}]`}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <Item
                            provided={provided}
                            regVector={`${regName}.cols[${index}]`}
                            remove={colArray.remove}
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

        <AddItem append={colArray.append} />
      </section>
    </div>
  )
}
