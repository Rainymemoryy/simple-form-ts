/* eslint-disable import/no-anonymous-default-export */
import { TextareaAutosize } from '@mui/material'

export default function () {
  return (
    <main className='w-full'>
      <TextareaAutosize
        minRows={2}
        className='input-defaulvalue w-full'
        placeholder='Nhập câu trả lời'
      />
      <section className='flex items-center w-full'>
        {/* <MemoLayout /> */}
      </section>
    </main>
  )
}
