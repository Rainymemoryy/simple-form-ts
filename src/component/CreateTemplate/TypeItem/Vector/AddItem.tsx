import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { IconButton } from '@mui/material'

export default function AddItem({ append, remove }: any) {
  const [value, setValue] = useState('')

  return (
    <div className='group relative flex w-full items-center'>
      <DragIndicatorIcon className='opacity-20' />
      <div className='flex h-10 w-10 items-center justify-center'>
        <input type='checkbox' disabled />
      </div>

      <div className='flex flex-1 items-center gap-1'>
        <input
          className='input-text h-8 flex-1 truncate group-hover:border-violet-400'
          placeholder='Thêm tuỳ chọn mới'
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if (value !== '') {
                append({ value })
                setValue('')
              }

              e.preventDefault()
            }
          }}
        />
        <IconButton
          className='hover:text-violet-400'
          disabled={value === ''}
          onClick={() => {
            if (value !== '') {
              append({ value })
              setValue('')
            }
          }}
        >
          <AddIcon
            fontSize='small'
            className='opacity-0 group-hover:opacity-100'
          />
        </IconButton>
      </div>
    </div>
  )
}
