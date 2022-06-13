import { Button, Checkbox, IconButton } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import AddIcon from '@mui/icons-material/Add'
interface Props {
  fieldArray?: any
  regName?: any
}

export default function AddItemCheckorRadio({ fieldArray, regName }: Props) {
  const methods = useFormContext()
  const [value, setValue] = useState('')

  return (
    <div className='flex items-center w-full relative group'>
      <DragIndicatorIcon className='opacity-20' />
      <Checkbox disabled />
      <div className='flex gap-1 items-center flex-1'>
        <input
          className='input-text flex-1 h-8 truncate group-hover:border-violet-400'
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
          className='w-8 h-8 hover:text-violet-700'
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
          <span className='text-center block'>thêm "Khác"</span>
        </Button>
      </div>
    </div>
  )
}
