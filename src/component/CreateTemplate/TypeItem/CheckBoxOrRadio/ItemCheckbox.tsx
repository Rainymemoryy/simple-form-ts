import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import CheckboxOrRadioItem from './CheckboxOrRadioItem'
import AddItemCheckorRadio from './AddItemCheckorRadio'
import Another from './Another'

interface Props {
  regName: any
}

export default function ItemCheckbox({ regName }: Props) {
  const regNameItem = `${regName}.${registerItem.listCheckOrRadio}`
  const methods = useFormContext()
  const fieldArray = useFieldArray({
    control: methods.control,
    name: regNameItem
  })

  const { fields, move } = fieldArray

  return (
    <div>
      <DragDropContext
        onDragEnd={e => {
          e.source && e.destination && move(e.source.index, e.destination.index)
        }}
      >
        <Droppable droppableId='61000' type='droppableItem'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`${snapshot.isDraggingOver && 'rounded bg-slate-50'}`}
            >
              {fields.map((item, index) => (
                <Draggable
                  key={`checkItem${index}`}
                  draggableId={`checkItem${index}`}
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

      <Another regName={regName} />

      <AddItemCheckorRadio fieldArray={fieldArray} regName={regName} />
    </div>
  )
}
