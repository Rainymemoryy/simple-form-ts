import React, { useState } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { itemType } from '../../../../constants/itemType'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function AddItem({ append, type }: any) {
  const [value, setValue] = useState('')

  return (
    <div className='group relative flex w-full items-center'>
      <DragIndicatorIcon className='opacity-20' />
      <div className='flex h-10 w-10 items-center justify-center'>
        {type === itemType.vectorCheckbox && <input type='checkbox' disabled />}
        {type === itemType.vectorRadio && <input type='radio' disabled />}
      </div>

      <div className='flex flex-1 items-center gap-1'>
        <input
          className='input-text h-8 flex-1 truncate border-slate-200 group-hover:border-violet-400'
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

        <button
          className={`flex items-center justify-center opacity-50 outline-none transition-transform ${
            value !== '' && 'scale-150 opacity-100'
          }`}
          disabled={value === ''}
          onClick={() => {
            if (value !== '') {
              append({ value })
              setValue('')
            }
          }}
        >
          <BsFillArrowRightCircleFill />
        </button>

        {/* <IconButton
          className='hover:text-violet-400'
         
        >
          <AddIcon
            fontSize='small'
            className='opacity-0 group-hover:opacity-100'
          />
        </IconButton> */}
      </div>
    </div>
  )
}
