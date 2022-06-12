import { Button, Checkbox } from '@mui/material'

import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import { Draggable } from 'react-beautiful-dnd'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import CheckboxOrRadioItem from './CheckboxOrRadioItem'

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
  console.log(fields)

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
              {[1, 2, 3].map((item, index) => (
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
