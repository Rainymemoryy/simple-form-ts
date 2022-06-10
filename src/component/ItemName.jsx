import { TextareaAutosize } from '@mui/material'
import React from 'react'

export default function ItemName() {
  return (
    <TextareaAutosize
      className='input-text min-h-[32px] text-lg flex-1 tracking-wide font-medium resize-none '
      placeholder='Nhập tên câu hỏi'
    />
  )
}
