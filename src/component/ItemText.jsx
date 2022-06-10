/* eslint-disable import/no-anonymous-default-export */

import { TextareaAutosize } from '@mui/material'
import React from 'react'
// import MemoLayout from "./MemoLayout";

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
