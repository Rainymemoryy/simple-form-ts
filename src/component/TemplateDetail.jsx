import { Button } from '@mui/material'
import { Draggable } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { regName } from '../constants/registerCreateTemplate'
import useGetTemplateItems from '../hooks/useGetTemplateItems'
import CreateItem from './CreateItem'
import ItemLayout from './ItemLayout'

export default function TemplateDetail() {
  const methods = useForm()

  const { move } = useFieldArray({
    control: methods.control,
    name: 'items'
  })

  const data = useGetTemplateItems(methods)

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
            <span className='text-center block'>Submit</span>
          </Button>
          <DragDropContext
            onDragEnd={e => {
              move(e.source.index, e.destination.index)
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
                  {data?.map((item, index) => (
                    <Draggable
                      key={`card${item?.itemTmpID}`}
                      draggableId={`card${item?.itemTmpID}`}
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
                                type={3}
                                provided={provided}
                                snapshot={snapshot}
                                regName={regName(index)}
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
          <CreateItem />
        </form>
      </FormProvider>
    </main>
  )
}
