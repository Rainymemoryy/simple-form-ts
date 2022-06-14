import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'

import AddItemCheckorRadio from './AddItem'
import Another from './Another'
import CheckboxOrRadioItem from './CheckboxOrRadioItem'

interface Props {
  regName: any
  type: any
}

export default function ItemCheckbox({ regName, type }: Props) {
  const regNameItem = `${regName}.${registerItem.listCheckbox}`
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
        <Droppable droppableId={regName} type='droppableItem'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={`${snapshot.isDraggingOver && 'rounded bg-slate-50'}`}
            >
              {fields.map((item, index) => (
                <Draggable
                  key={`checkItem${item.id}`}
                  draggableId={`checkItem${item.id}`}
                  index={index}
                >
                  {(provided, snapshot) => {
                    return (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <CheckboxOrRadioItem
                          provided={provided}
                          regName={`${regNameItem}[${index}]`}
                          fieldArray={fieldArray}
                          index={index}
                          regNameItem={regName}
                          type={type}
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
