import { Button, Checkbox, IconButton, Radio } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import AddIcon from '@mui/icons-material/Add'
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

      {type === itemType.checkbox && <Checkbox disabled />}

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
