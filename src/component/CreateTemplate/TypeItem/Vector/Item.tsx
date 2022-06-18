import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { useFormContext } from 'react-hook-form'

export default function Item({ provided, regVector, remove, index }: any) {
  const { register } = useFormContext()

  return (
    <section className='group relative flex  w-full items-center'>
      <div
        className='text-violet-400 opacity-70 group-hover:fill-violet-400 group-hover:opacity-100 '
        {...provided.dragHandleProps}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <DragIndicatorIcon />
      </div>

      <div className='flex h-10 w-10 items-center justify-center'>
        <input type='checkbox' disabled />
      </div>

      <input
        className='input-text h-8 flex-1 truncate group-hover:border-violet-400'
        placeholder='Nhập tên hàng'
        {...register(`${regVector}.value`)}
      />

      <div className='flex gap-1'>
        <IconButton
          className='h-8 w-8 hover:text-violet-700'
          onClick={() => remove(index)}
        >
          <ClearIcon
            fontSize='small'
            className='opacity-0 group-hover:opacity-100'
          />
        </IconButton>
      </div>
    </section>
  )
}
