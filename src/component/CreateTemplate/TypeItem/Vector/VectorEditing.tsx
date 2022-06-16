import { Checkbox, IconButton } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import ClearIcon from '@mui/icons-material/Clear'

export default function VectorEditing() {
  return (
    <div className='flex gap-3'>
      <section aria-label='hàng' className='flex-1 '>
        {[1, 2, 3, 4, 5, 6].map(e => (
          <section key={e} className='group relative flex  w-full items-center'>
            <div
              className='text-violet-400 opacity-70 group-hover:fill-violet-400 group-hover:opacity-100 '
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <DragIndicatorIcon />
            </div>

            {/* <Checkbox disabled />    */}

            <input
              className='input-text h-8 flex-1 truncate group-hover:border-violet-400'
              placeholder='Nhập tuỳ chọn'
            />

            <button className='h-8 w-8 hover:text-violet-700'>
              <ClearIcon
                fontSize='small'
                className='opacity-0 group-hover:opacity-100'
              />
            </button>

            {/* <div className='flex gap-1'>
              <IconButton className='h-8 w-8 hover:text-violet-700'>
                <ClearIcon
                  fontSize='small'
                  className='opacity-0 group-hover:opacity-100'
                />
              </IconButton>
            </div> */}
          </section>
        ))}
      </section>
      <section aria-label='cột' className='flex-1 '>
        {[1, 2, 3].map(e => (
          <section key={e} className='group relative flex  w-full items-center'>
            <div
              className='text-violet-400 opacity-70 group-hover:fill-violet-400 group-hover:opacity-100 '
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <DragIndicatorIcon />
            </div>

            <Checkbox disabled />

            <input
              className='input-text h-8 flex-1 group-hover:border-violet-400'
              placeholder='Nhập tuỳ chọn'
            />
            <div className='flex gap-1'>
              <IconButton className='h-8 w-8 hover:text-violet-700'>
                <ClearIcon
                  fontSize='small'
                  className='opacity-0 group-hover:opacity-100'
                />
              </IconButton>
            </div>
          </section>
        ))}
      </section>
    </div>
  )
}
