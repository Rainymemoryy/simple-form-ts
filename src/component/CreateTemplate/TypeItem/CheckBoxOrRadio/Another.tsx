import React from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { Checkbox } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'

interface Props {
  fieldArray?: any
  regName?: any
}

export default function Another({ fieldArray, regName }: Props) {
  const methods = useFormContext()
  const isShow = methods.watch(`${regName}.${registerItem.isAnother}`)

  return (
    <>
      {isShow && (
        <div className='flex items-center w-full relative'>
          <DragIndicatorIcon className='opacity-0' />
          <Checkbox disabled />

          <input
            className='input-text flex-1 h-8 truncate bg-transparent border-dashed'
            placeholder='Khác...'
            disabled
          />
        </div>
      )}
    </>
  )
}
