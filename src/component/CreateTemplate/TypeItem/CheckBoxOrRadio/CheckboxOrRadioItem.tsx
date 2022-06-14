import { Checkbox, IconButton } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'
import { Controller, useFormContext } from 'react-hook-form'
import { Radio } from '@material-tailwind/react'

interface Props {
  regName: any
  provided: any
  fieldArray: any
  index: any
}

export default function CheckboxOrRadioItem({
  provided,
  regName,
  fieldArray,
  index
}: Props) {
  const methods = useFormContext()

  return (
    <main>
      <section className='flex items-center w-full relative'>
        <div
          className='opacity-70 group-hover:opacity-100 group-hover:fill-violet-400 text-violet-400'
          {...provided.dragHandleProps}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <DragIndicatorIcon />
        </div>

        <Controller
          control={methods.control}
          name={`${regName}.isCheck`}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Checkbox
              onChange={onChange}
              onBlur={onBlur}
              checked={value || false}
            />
          )}
        />

        <div className='flex gap-4 w-max'>
          <Radio id='blue' name='color' color='blue' defaultChecked />
          <Radio id='red' name='color' color='red' />
          <Radio id='green' name='color' color='green' />
          <Radio id='amber' name='color' color='amber' />
          <Radio id='teal' name='color' color='teal' />
          <Radio id='indigo' name='color' color='indigo' />
          <Radio id='purple' name='color' color='purple' />
          <Radio id='pink' name='color' color='pink' />
        </div>

        <input
          className='input-text h-8 flex-1 group-hover:border-violet-400'
          placeholder='Nhập tuỳ chọn'
          {...methods.register(`${regName}.value`)}
        />
        <div className='flex gap-1'>
          <IconButton className='w-8 h-8 hover:text-violet-700'>
            <AddIcon
              fontSize='small'
              className='opacity-0 group-hover:opacity-100'
            />
          </IconButton>

          <IconButton
            className='w-8 h-8 hover:text-violet-700'
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
            className='w-8 h-8 hover:text-violet-700'
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

      <section className='flex items-center w-full relative group pl-[66px]'>
        {/* <MemoLayout /> */}
      </section>
    </main>
  )
}
