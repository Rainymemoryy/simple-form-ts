import { Button, IconButton } from '@mui/material'
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import { registerItem, regItem } from '../../constants/regCreTemplate'
import CreateItem from './CreateItem'
import ItemLayout from './ItemLayout'
import TemplateNav from './TemplateNav'

let renderCount = 0

export default function CreateTemplate() {
  const methods = useForm()

  const fieldArray = useFieldArray({
    control: methods.control,
    name: 'items'
  })

  console.log('CreateTemplate', 'reRender')

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(data => console.log('submit', data))}
      >
        <div className='flex justify-center py-6 px-6'>
          <main className='relative w-full max-w-3xl'>
            <nav className='absolute top-0 left-0 hidden w-96 translate-x-[-100%] lg:block'>
              <TemplateNav fieldArray={fieldArray} />
            </nav>
            <div className='flex w-full items-center justify-between'>
              <Button
                type='submit'
                className='button-default flex gap-1.5'
                sx={{
                  textTransform: 'unset',
                  fontSize: 16,
                  fontWeight: '400'
                }}
              >
                <span className='block text-center'>
                  Submit {++renderCount}
                </span>
              </Button>

              <IconButton
                className='h-8 w-8 hover:text-violet-700'
                onClick={() => {
                  fieldArray.fields?.map((e, index) =>
                    methods.setValue(
                      `${regItem(index)}.${registerItem.isShowContent}`,
                      false
                    )
                  )
                }}
              >
                <UnfoldLessIcon />
              </IconButton>
            </div>

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
          </main>
        </div>
      </form>
    </FormProvider>
  )
}
