import React from 'react'
import { Button } from '@mui/material'
import { BsX } from 'react-icons/bs'

export default function MemoCheckOrRadio() {
  return (
    <main>
      {[1, 2, 3].map((item, index) => (
        <section
          key={index}
          className='relative flex w-full items-center gap-1'
        >
          <div className='flex h-10 w-10 items-center justify-center'>
            <input type={'checkbox'} />
          </div>
          <input
            className='input-text h-8 flex-1 hover:border-violet-400'
            placeholder='Nhập tuỳ chọn'
          />
          <div className='flex gap-1'>
            <button className='opacity-50 outline-none transition-transform hover:scale-150 hover:opacity-100'>
              <BsX />
            </button>
          </div>
        </section>
      ))}

      <section className='flex w-full items-center gap-1'>
        <div className='flex h-10 w-10 items-center justify-center'>
          <input type={'checkbox'} disabled />
        </div>
        <input
          className='input-text h-8 flex-1 border-dashed bg-transparent hover:border-violet-400'
          placeholder='Khác...'
          disabled
        />
        <div className='flex gap-1'>
          <button className='opacity-50 outline-none transition-transform hover:scale-150 hover:opacity-100'>
            <BsX />
          </button>
        </div>
      </section>

      <section className='flex w-full items-center'>
        <div className='flex h-10 w-10 items-center justify-center'>
          <input type={'checkbox'} disabled />
        </div>
        <div className='flex flex-1 items-center gap-1'>
          <input
            className='input-text h-8 flex-1 truncate'
            placeholder='Thêm tuỳ chọn mới'
          />
          hoặc
          <Button
            className='button-default'
            sx={{
              textTransform: 'unset',
              fontSize: 16,
              fontWeight: '400'
            }}
          >
            <span className='block text-center'>thêm "Khác"</span>
          </Button>
        </div>
      </section>
    </main>
  )
}
