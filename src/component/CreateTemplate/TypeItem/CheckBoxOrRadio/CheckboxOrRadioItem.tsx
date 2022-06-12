import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'
import MemoLayout from './MemoLayout'
import { useFormContext } from 'react-hook-form'

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
      <section className='flex items-center w-full relative group'>
        <div
          className='opacity-50 group-hover:opacity-100 group-hover:fill-violet-400'
          {...provided.dragHandleProps}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <DragIndicatorIcon />
        </div>

        <Checkbox name='check' />
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
