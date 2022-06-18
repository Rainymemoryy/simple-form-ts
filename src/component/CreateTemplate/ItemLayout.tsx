import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import { IconButton, TextareaAutosize } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning'
import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../constants/regCreTemplate'
import ItemTypeWrapper from './TypeItem/ItemTypeWrapper'
import SelectItemType from './SelectItemType'

const useShowContent = regName => {
  const methods = useFormContext()

  const isShowContent = methods.watch(
    `${regName}.${registerItem.isShowContent}`
  )

  return {
    isShowContent,
    register: methods.register,
    control: methods.control,
    getValues: methods.getValues
  }
}

interface Props {
  provided: any
  snapshot: any
  regName: string
  index: number
  fieldArray: any
}
export default function ItemLayout({
  provided,
  snapshot,
  index,
  regName,
  fieldArray
}: Props) {
  const { isShowContent, register, control, getValues } =
    useShowContent(regName)

  return (
    <main className='relative flex items-center' id={`${index}`}>
      <section
        className='absolute left-[-24px] opacity-50 hover:fill-violet-400 group-hover:opacity-100'
        {...provided.dragHandleProps}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <DragIndicatorIcon />
      </section>

      <section
        className={`relative box-border flex flex-1 cursor-default flex-col gap-1 rounded-lg border-2 border-transparent bg-white p-8 pb-6 shadow-11 outline-0 hover:border-violet-400 ${
          snapshot?.isDragging && 'border-violet-400'
        } transition-colors`}
      >
        <div className='flex flex-1 items-center gap-3'>
          <TextareaAutosize
            aria-label='Item name'
            className='input-text mt-0.5 min-h-[32px] flex-1 resize-none py-0.5 text-lg font-medium tracking-wide'
            placeholder='Nhập tên câu hỏi'
            {...register(`${regName}.${registerItem.itemName}`)}
            onKeyDown={(e: any) => {
              if (!e.shiftKey && e.keyCode === 13) {
                e.target.blur()
              }
            }}
          />
          <SelectItemType regName={`${regName}.${registerItem.itemType}`} />
        </div>

        <TextareaAutosize
          aria-label='Item description'
          className='input-text w-full resize-none text-sm text-gray-500'
          placeholder='Nhập mô tả'
          {...register(`${regName}.${registerItem.itemDecs}`)}
        />

        {isShowContent && (
          <img
            className='rounded-md'
            src='https://images.wallpapersden.com/image/wxl-small-memory_58461.jpg'
            alt=''
          />
        )}

        {isShowContent && <ItemTypeWrapper regName={regName} index={index} />}

        <div className='flex items-center justify-between gap-3 pt-2'>
          <div className='flex items-center justify-end gap-3 text-yellow-400'>
            <WarningIcon />
          </div>

          <div className='flex items-center justify-end gap-3'>
            <Controller
              control={control}
              name={`${regName}.${registerItem.isShowContent}`}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <IconButton
                  className='h-8 w-8 hover:text-violet-700'
                  onClick={() => onChange(!value)}
                >
                  {value ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
                </IconButton>
              )}
            />

            <IconButton
              className='h-8 w-8 hover:text-violet-700'
              onClick={() => {
                const field: any = getValues(`${regName}`)
                const copyData = {
                  ...field,
                  itemTmpID: `item-${Math.random()}`,
                  itemName: `${field.itemName} - copy`
                }
                fieldArray.insert(index + 1, copyData)
              }}
            >
              <ContentCopyIcon />
            </IconButton>

            <IconButton
              className='h-8 w-8 hover:text-violet-700'
              onClick={() => {
                fieldArray.remove(index)
              }}
            >
              <DeleteOutlineIcon />
            </IconButton>

            <div className='flex h-10 items-center gap-2 border-l pl-3'>
              <Controller
                control={control}
                name={`${regName}.${registerItem.isRequired}`}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <input
                    type='checkbox'
                    className='switch'
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={value || false}
                  />
                )}
              />
              <p>bắt buộc</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
