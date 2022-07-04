import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { BsImage, BsUpload, BsXCircleFill } from 'react-icons/bs'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { registerItem } from '../../constants/regCreTemplate'

export default function TeamplateDecs() {
  const { control, register } = useFormContext()

  return (
    <div className='my-3 rounded-lg bg-white p-8 shadow-11'>
      <Controller
        control={control}
        name='templateName'
        defaultValue='Tên phiếu khảo sát'
        render={({ field: { onChange, onBlur, value, ref, name } }) => (
          <ReactTextareaAutosize
            name={name}
            ref={ref}
            value={value?.trimStart() || ''}
            onChange={onChange}
            aria-label='Item name'
            className='input-text min-h-[32px] w-full flex-1 resize-none overflow-y-hidden text-xl font-medium tracking-wide'
            placeholder='Tên phiếu khảo sát'
            onKeyDown={(e: any) => {
              if (e.keyCode === 13) {
                e.target.blur()
              }
            }}
          />
        )}
      />

      <Controller
        control={control}
        name='templateDesc'
        defaultValue='Mô tả chi tiết cho phiếu khảo sát'
        render={({ field: { onChange, onBlur, value, ref, name } }) => (
          <ReactTextareaAutosize
            name={name}
            ref={ref}
            value={value?.trimStart() || ''}
            onChange={onChange}
            aria-label='Item name'
            className='input-text w-full flex-1 resize-none overflow-y-hidden text-sm text-gray-500'
            placeholder='Mô tả'
            onKeyDown={(e: any) => {
              if (e.keyCode === 13) {
                e.target.blur()
              }
            }}
          />
        )}
      />

      <Controller
        defaultValue={null}
        control={control}
        name='templateImage'
        render={({ field: { value, onChange } }) => (
          <>
            <label htmlFor='templateImage'>
              {(!value || !value[0]) && (
                <div className='flex h-32 flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed bg-slate-50 text-slate-500 opacity-70 transition-all hover:text-slate-900'>
                  <BsImage className='h-8 w-8' />
                  <div className='flex items-center gap-2'>
                    <p>Chọn ảnh</p>
                    <BsUpload />
                  </div>
                </div>
              )}
              <input
                id='templateImage'
                type='file'
                accept='image/*'
                className='hidden'
                value={''}
                {...register('templateImage')}
              />
            </label>

            <div className='relative'>
              {value && value[0] && (
                <BsXCircleFill
                  className='absolute top-2 right-2 h-5 w-5 cursor-pointer fill-white mix-blend-exclusion transition-all hover:scale-150'
                  onClick={e => {
                    onChange(null)
                    e.stopPropagation()
                  }}
                />
              )}

              <label htmlFor='templateImage'>
                <img
                  className='w-full rounded-lg'
                  src={
                    value ? (value[0] ? URL.createObjectURL(value[0]) : '') : ''
                  }
                  alt=''
                />
              </label>
            </div>
          </>
        )}
      />
    </div>
  )
}
