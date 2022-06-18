import { IconButton } from '@mui/material'
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
        <div className='group relative flex w-full items-center'>
          <DragIndicatorIcon className='opacity-20' />

          {type === itemType.checkbox && (
            <div className='flex h-10 w-10 items-center justify-center'>
              <input type='checkbox' disabled />
            </div>
          )}

          {type === itemType.radio && (
            <div className='flex h-10 w-10 items-center justify-center'>
              <input type='radio' />
            </div>
          )}

          <input
            className='input-text h-8 flex-1 truncate border-dashed bg-transparent'
            placeholder='Khác...'
            disabled
          />

          <div className='flex gap-1'>
            <IconButton
              className='hover:text-violet-400'
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
