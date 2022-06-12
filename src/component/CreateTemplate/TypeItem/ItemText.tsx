/* eslint-disable import/no-anonymous-default-export */
import { TextareaAutosize } from '@mui/material'

export default function () {
  return (
    <>
      <TextareaAutosize
        minRows={2}
        className='input-defaulvalue'
        placeholder='Nhập câu trả lời'
      />
      <section className='flex items-center w-full'>
        {/* <MemoLayout /> */}
      </section>
    </>
  )
}
