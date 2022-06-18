import { IconButton } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'
import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import { itemType } from '../../../../constants/itemType'

interface Props {
  regName: any
  provided: any
  fieldArray: any
  index: any
  regNameItem: any
  type: any
}

export default function CheckboxOrRadioItem({
  provided,
  regName,
  fieldArray,
  index,
  regNameItem,
  type
}: Props) {
  const methods = useFormContext()

  return (
    <main>
      <section className='group relative flex w-full items-center'>
        <div
          className='text-violet-400 opacity-70 group-hover:fill-violet-400 group-hover:opacity-100 '
          {...provided.dragHandleProps}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <DragIndicatorIcon />
        </div>

        {type === itemType.checkbox && (
          <Controller
            control={methods.control}
            name={`${regName}.isCheck`}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div className='flex h-10 w-10 items-center justify-center'>
                <input
                  type='checkbox'
                  onChange={onChange}
                  checked={value || false}
                />
              </div>
            )}
          />
        )}

        {type === itemType.radio && (
          <Controller
            control={methods.control}
            // name={`${regNameItem}.${registerItem.radioCheck}`}
            name={`${regName}.isCheck`}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div className='flex h-10 w-10 items-center justify-center'>
                <input
                  type='radio'
                  name={`${regNameItem}.${registerItem.radioCheck}`}
                  // onChange={() => onChange(index)}
                  // checked={value === index}
                />
              </div>
            )}
          />
        )}

        <input
          className='input-text h-8 flex-1 group-hover:border-violet-400'
          placeholder='Nhập tuỳ chọn'
          {...methods.register(`${regName}.value`)}
        />
        <div className='flex gap-1'>
          <IconButton className='h-8 w-8 hover:text-violet-700'>
            <AddIcon
              fontSize='small'
              className='opacity-0 group-hover:opacity-100'
            />
          </IconButton>

          <IconButton
            className='h-8 w-8 hover:text-violet-700'
            onClick={() => {
              let dataTmp = fieldArray.fields[index]
              dataTmp = { ...dataTmp, value: dataTmp.value + ' - copy' }
              fieldArray.insert(index + 1, dataTmp)
            }}
          >
            <ContentCopyIcon
              fontSize='small'
              className='opacity-0 group-hover:opacity-100'
            />
          </IconButton>

          <IconButton
            className='h-8 w-8 hover:text-violet-700'
            onClick={() => {
              fieldArray.remove(index)
            }}
          >
            <ClearIcon
              fontSize='small'
              className='opacity-0 group-hover:opacity-100'
            />
          </IconButton>
        </div>
      </section>

      <section className='group relative flex w-full items-center pl-[66px]'>
        {/* <MemoLayout /> */}
      </section>
    </main>
  )
}
