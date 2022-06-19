import { Button } from '@mui/material'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { itemType } from '../../../../constants/itemType'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
interface Props {
  fieldArray?: any
  regName?: any
  type?: any
}

export default function AddItemCheckorRadio({
  fieldArray,
  regName,
  type
}: Props) {
  const methods = useFormContext()
  const [value, setValue] = useState('')

  return (
    <div className='group relative flex w-full items-center'>
      <DragIndicatorIcon className='opacity-20' />

      {type === itemType.checkbox && (
        <div className='flex h-10 w-10 items-center justify-center'>
          <input type='checkbox' disabled />
        </div>
      )}

      {type === itemType.radio && (
        <div className='flex h-10 w-10 items-center justify-center'>
          <input type='radio' disabled />
        </div>
      )}

      <div className='flex flex-1 items-center gap-1'>
        <input
          className='input-text h-8 flex-1 truncate border-slate-200 group-hover:border-violet-400'
          placeholder='Thêm tuỳ chọn mới'
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if (value !== '') {
                fieldArray.append({ value })
                setValue('')
              }

              e.preventDefault()
            }
          }}
        />
        <button
          className={`flex h-8 w-8 items-center justify-center opacity-50 outline-none transition-transform ${
            value !== '' && 'scale-150 opacity-100'
          }`}
          disabled={value === ''}
          onClick={() => {
            if (value !== '') {
              fieldArray.append({ value })
              setValue('')
            }
          }}
        >
          <BsFillArrowRightCircleFill />
        </button>
        hoặc
        <Button
          className='button-default'
          sx={{
            textTransform: 'unset',
            fontSize: 16,
            fontWeight: '400'
          }}
          onClick={() => {
            methods.setValue(`${regName}.${registerItem.isAnother}`, true)
          }}
        >
          <span className='block text-center'>thêm "Khác"</span>
        </Button>
      </div>
    </div>
  )
}
