import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { itemType } from '../../../../constants/itemType'
import { BsX } from 'react-icons/bs'
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
            className='input-text h-8 flex-1 border-dashed group-hover:border-violet-400'
            placeholder='Khác...'
            disabled
          />

          <div className='flex gap-1'>
            <button
              className='opacity-50 outline-none transition-transform hover:scale-150 hover:opacity-100'
              onClick={() => {
                methods.setValue(`${regName}.${registerItem.isAnother}`, false)
              }}
            >
              <BsX />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
