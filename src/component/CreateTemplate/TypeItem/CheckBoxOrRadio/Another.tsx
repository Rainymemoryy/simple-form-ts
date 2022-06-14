import React from 'react'
import { Checkbox, IconButton, Radio } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import ClearIcon from '@mui/icons-material/Clear'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { itemType } from '../../../../constants/itemType'
interface Props {
  fieldArray?: any
  regName?: any
  type?: any
}

export default function Another({ fieldArray, regName, type }: Props) {
  const methods = useFormContext()
  const isShow = methods.watch(`${regName}.${registerItem.isAnother}`)

  return (
    <>
      {isShow && (
        <div className='flex items-center w-full relative group'>
          <DragIndicatorIcon className='opacity-20' />

          {type === itemType.checkbox && <Checkbox disabled />}
          {type === itemType.radio && <Radio disabled />}

          <input
            className='input-text flex-1 h-8 truncate bg-transparent border-dashed'
            placeholder='Khác...'
            disabled
          />

          <div className='flex gap-1'>
            <IconButton
              className='w-8 h-8 hover:text-violet-700'
              onClick={() => {
                methods.setValue(`${regName}.${registerItem.isAnother}`, false)
              }}
            >
              <ClearIcon
                fontSize='small'
                className='opacity-0 group-hover:opacity-100'
              />
            </IconButton>
          </div>
        </div>
      )}
    </>
  )
}
