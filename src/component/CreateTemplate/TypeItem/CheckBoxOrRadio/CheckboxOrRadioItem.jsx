import { Checkbox } from '@mui/material'
import React from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'
import MemoLayout from './MemoLayout'

export default function CheckboxOrRadioItem(props) {
  const { provided } = props
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
        />
        <div className='flex gap-1'>
          <AddIcon
            fontSize='small'
            className='opacity-0 group-hover:opacity-100 group-hover:fill-violet-400'
          />
          <ContentCopyIcon
            fontSize='small'
            className='opacity-0 group-hover:opacity-100 group-hover:fill-violet-400'
          />
          <ClearIcon
            fontSize='small'
            className='opacity-0 group-hover:opacity-100 group-hover:fill-violet-400'
          />
        </div>
      </section>

      <section className='flex items-center w-full relative group pl-[66px]'>
        <MemoLayout />
      </section>
    </main>
  )
}
