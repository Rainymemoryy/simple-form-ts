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

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(data => console.log('submit', data))}
      >
        <div className='flex justify-center py-6 px-6'>
          <nav className='w-96 hidden lg:block '>
            <TemplateNav fieldArray={fieldArray} />
          </nav>

          <main className='max-w-3xl w-full'>
            <div className='w-full flex justify-between items-center'>
              <Button
                type='submit'
                className='button-default flex gap-1.5'
                sx={{
                  textTransform: 'unset',
                  fontSize: 16,
                  fontWeight: '400'
                }}
              >
                <span className='text-center block'>
                  Submit {++renderCount}
                </span>
              </Button>

              <IconButton
                className='w-8 h-8 hover:text-violet-700'
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
                                <div className='py-2.5 '>
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
