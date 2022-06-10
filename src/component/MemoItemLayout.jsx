import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import MemoCheckOrRadio from './MemoCheckOrRadio'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton, TextareaAutosize } from '@mui/material'
export default function MemoItemLayout(props) {
  const { type, provided } = props
  return (
    <main className='flex items-center relative'>
      <div
        className='opacity-50 group-hover:opacity-100 hover:fill-violet-400 absolute left-[-24px]'
        {...provided.dragHandleProps}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <DragIndicatorIcon />
      </div>

      <section className='flex flex-col gap-1 flex-1 border border-violet-200 rounded p-3 hover:border-violet-400'>
        <div className='flex gap-1 items-center pl-3'>
          <input className='input-text w-full h-8' placeholder='Nhập câu hỏi' />
        </div>

        {type === 1 && (
          <section className='pl-3'>
            <TextareaAutosize
              placeholder=''
              minRows={2}
              disabled
              className='px-3 py-1.5 border w-full resize-none rounded bg-transparent'
            />
          </section>
        )}

        {type === 2 && <MemoCheckOrRadio />}
        {type === 3 && (
          <section className='pl-3'>
            <div className='bg-slate-100 h-20 rounded relative'>
              <AddPhotoAlternateIcon className='absolute right-2 bottom-2' />
            </div>
          </section>
        )}

        <div className='flex justify-end gap-3  pt-1'>
          <IconButton className='w-8 h-8 hover:text-violet-700'>
            <ContentCopyIcon />
          </IconButton>

          <IconButton className='w-8 h-8 hover:text-violet-700'>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
      </section>
    </main>
  )
}
