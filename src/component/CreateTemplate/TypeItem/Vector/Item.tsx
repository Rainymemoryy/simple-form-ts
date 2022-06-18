import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { useFormContext } from 'react-hook-form'
import { BsX } from 'react-icons/bs'

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

      <button
        className='opacity-50 outline-none transition-transform hover:scale-150 hover:opacity-100'
        onClick={() => remove(index)}
      >
        <BsX />
      </button>
    </section>
  )
}
