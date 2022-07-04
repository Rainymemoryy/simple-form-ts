import { Button, IconButton } from '@mui/material'
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import { registerItem, regItem } from '../../constants/regCreTemplate'
import CreateItem from './CreateItem'
import ItemLayout from './ItemLayout'
import TemplateNav from './TemplateNav'
import { useEffect } from 'react'
import { itemType } from '../../constants/itemType'
import { OverFlowDiv } from '../../style/component/OverFlowDiv'
import TeamplateDecs from './TeamplateDecs'

let renderCount = 0

export default function CreateTemplate() {
  const methods = useForm()

  const fieldArray = useFieldArray({
    control: methods.control,
    name: 'items'
  })

  useEffect(() => {
    fieldArray?.append({
      itemName: 'Nhập tên câu hỏi',
      itemType: itemType.text,
      isShowContent: true
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(data => {
          console.log('submit', JSON.stringify(data))
          console.log('data', data)
        })}
      >
        <div className='relative flex h-full justify-center gap-10 px-6'>
          <OverFlowDiv className='sticky top-0 hidden max-h-screen w-96 overflow-y-auto lg:block'>
            <TemplateNav fieldArray={fieldArray} />
          </OverFlowDiv>

          <main className='relative w-full max-w-3xl py-6'>
            <div className='flex w-full items-center justify-between'>
              <Button
                type='submit'
                className='button-default flex gap-1.5'
                sx={{
                  textTransform: 'unset',
                  fontSize: 16,
                  fontWeight: '400',
                  height: 40
                }}
              >
                <span className='block text-center'>
                  Submit {++renderCount}
                </span>
              </Button>

              <IconButton
                className='hover:text-violet-400'
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

            <TeamplateDecs />

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
                              <div className='relative py-2.5 '>
                                <ItemLayout
                                  provided={provided}
                                  snapshot={snapshot}
                                  regName={regItem(index)}
                                  index={index}
                                  fieldArray={fieldArray}
                                  id={item.id}
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
