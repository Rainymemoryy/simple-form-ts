import { Button } from '@mui/material'
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { regItem } from '../../constants/regCreTemplate'
import CreateItem from './CreateItem'
import ItemLayout from './ItemLayout'

let renderCount = 0

export default function TemplateDetail() {
  const methods = useForm()

  const fieldArray = useFieldArray({
    control: methods.control,
    name: 'items'
  })

  return (
    <main className='max-w-3xl w-full h-fit flex flex-col gap-5'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(data => console.log('submit', data))}
        >
          <Button
            type='submit'
            className='button-default flex gap-1.5'
            sx={{
              textTransform: 'unset',
              fontSize: 16,
              fontWeight: '400'
            }}
          >
            <span className='text-center block'>Submit {++renderCount}</span>
          </Button>

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
                  {fieldArray?.fields
                    ?.map(e => e.itemTmpID)
                    ?.map((item, index) => (
                      <Draggable
                        key={`card${item}`}
                        draggableId={`card${item}`}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                            >
                              <div className='py-2.5'>
                                <ItemLayout
                                  provided={provided}
                                  snapshot={snapshot}
                                  regName={regItem(index)}
                                  index={index}
                                  fieldArray={fieldArray}
                                />
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
          <CreateItem append={fieldArray.append} />
        </form>
      </FormProvider>
    </main>
  )
}
