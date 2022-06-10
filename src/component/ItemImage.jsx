import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { TextareaAutosize } from '@mui/material'
export default function ItemImage() {
  return (
    <main className='flex flex-col gap-1'>
      <div className='bg-slate-100 h-20 rounded relative'>
        <AddPhotoAlternateIcon className='absolute right-2 bottom-2' />
      </div>
      <TextareaAutosize
        className='input-text w-full min-h-8 resize-none text-sm text-gray-500'
        placeholder='Nhập mô tả cho bức ảnh'
      />
    </main>
  )
}
