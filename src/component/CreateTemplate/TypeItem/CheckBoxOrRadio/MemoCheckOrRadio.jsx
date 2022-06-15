import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import { Button, Checkbox, IconButton } from '@mui/material'

export default function MemoCheckOrRadio() {
  return (
    <main>
      {[1, 2, 3].map((item, index) => (
        <section
          key={index}
          className='relative flex w-full items-center gap-1'
        >
          <Checkbox />
          <input
            className='input-text h-8 flex-1 hover:border-violet-400'
            placeholder='Nhập tuỳ chọn'
          />
          <div className='flex gap-1'>
            <IconButton className='h-8 w-8 hover:text-violet-700'>
              <ClearIcon />
            </IconButton>
          </div>
        </section>
      ))}

      <section className='flex w-full items-center gap-1'>
        <Checkbox disabled />
        <input
          className='input-text h-8 flex-1 border-dashed bg-transparent hover:border-violet-400'
          placeholder='Nhập tuỳ chọn'
          disabled
        />
        <div className='flex gap-1'>
          <IconButton className='h-8 w-8 hover:text-violet-700'>
            <ClearIcon />
          </IconButton>
        </div>
      </section>

      <section className='flex w-full items-center'>
        <Checkbox disabled />
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
