import { Button, Checkbox, IconButton, Radio } from '@mui/material'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import AddIcon from '@mui/icons-material/Add'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { itemType } from '../../../../constants/itemType'
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
        <div className='flex h-[42px] w-[42px] items-center justify-center'>
          <label className='checkbox path'>
            <input type='checkbox' disabled />
            <svg viewBox='0 0 21 21'>
              <path d='M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186' />
            </svg>
          </label>
        </div>
      )}

      {type === itemType.radio && <Radio disabled />}

      <div className='flex flex-1 items-center gap-1'>
        <input
          className='input-text h-8 flex-1 truncate group-hover:border-violet-400'
          placeholder='Thêm tuỳ chọn mới'
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if (value !== '') {
                setValue('')
                fieldArray.append({ value, tmpID: Math.random() })
              }

              e.preventDefault()
            }
          }}
        />
        <IconButton
          className='h-8 w-8 hover:text-violet-700'
          disabled={value === ''}
          onClick={() => {
            if (value !== '') {
              setValue('')
              fieldArray.append({ value, tmpID: Math.random() })
            }
          }}
        >
          <AddIcon
            fontSize='small'
            className='opacity-0 group-hover:opacity-100'
          />
        </IconButton>
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
