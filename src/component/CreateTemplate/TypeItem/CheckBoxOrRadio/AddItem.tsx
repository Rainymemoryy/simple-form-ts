import { Button, Checkbox } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'

interface Props {
  fieldArray?: any
  regName?: any
}

export default function AddItemCheckorRadio({ fieldArray, regName }: Props) {
  const methods = useFormContext()
  const [value, setValue] = useState('')

  return (
    <div className='flex items-center w-full relative'>
      <DragIndicatorIcon className='opacity-20' />
      <Checkbox disabled />
      <div className='flex gap-1 items-center flex-1'>
        <input
          className='input-text flex-1 h-8 truncate'
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
            console.log(`${regName}.${registerItem.isAnother}`)
          }}
        >
          <span className='text-center block'>thêm "Khác"</span>
        </Button>
      </div>
    </div>
  )
}
