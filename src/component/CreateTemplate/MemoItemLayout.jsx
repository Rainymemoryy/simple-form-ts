import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton, TextareaAutosize } from '@mui/material'
import MemoCheckOrRadio from './TypeItem/CheckBoxOrRadio/MemoCheckOrRadio'
import { BsFiles, BsTrash } from 'react-icons/bs'
export default function MemoItemLayout(props) {
  const { type, provided } = props
  return (
    <main className='relative flex items-center'>
      <div
        className='absolute left-[-24px] opacity-50 hover:fill-violet-400 group-hover:opacity-100'
        {...provided.dragHandleProps}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <DragIndicatorIcon />
      </div>

      <section className='flex flex-1 flex-col gap-1 rounded border border-violet-200 p-3 hover:border-violet-400'>
        <div className='flex items-center gap-1 pl-3'>
          <input className='input-text h-8 w-full' placeholder='Nhập câu hỏi' />
        </div>

        {type === 1 && (
          <section className='pl-3'>
            <TextareaAutosize
              placeholder=''
              minRows={2}
              disabled
              className='w-full resize-none rounded border bg-transparent px-3 py-1.5'
            />
          </section>
        )}

        {type === 2 && <MemoCheckOrRadio />}
        {type === 3 && (
          <section className='pl-3'>
            <div className='relative h-20 rounded bg-slate-100'>
              <AddPhotoAlternateIcon className='absolute right-2 bottom-2' />
            </div>
          </section>
        )}

        <div className='flex justify-end gap-3  pt-1'>
          <button
            type={'button'}
            className='flex h-10 w-10 items-center justify-center rounded-full text-slate-900 outline-none'
          >
            <BsFiles className='h-5 w-5 opacity-50 transition-all hover:scale-125 hover:opacity-100' />
          </button>

          <button className='flex h-10 w-10 items-center justify-center rounded-full text-slate-900 outline-none'>
            <BsTrash className='h-5 w-5 opacity-50 transition-all hover:scale-125 hover:opacity-100' />
          </button>
        </div>
      </section>
    </main>
  )
}
