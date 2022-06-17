/* eslint-disable import/no-anonymous-default-export */
import { Checkbox, TextareaAutosize } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../../constants/regCreTemplate'

interface Props {
  regName: any
}

export default function ({ regName }: Props) {
  const methods = useFormContext()
  return (
    <main className='w-full'>
      {methods.watch(`${regName}.${registerItem.isMultiLine}`) ? (
        <TextareaAutosize
          minRows={2}
          className='input-defaulvalue w-full'
          placeholder='Nhập một đoạn văn'
          {...methods.register(`${regName}.${registerItem.textDefault}`)}
        />
      ) : (
        <input
          className='input-text h-8 w-full'
          placeholder='Nhập một câu ngắn'
          {...methods.register(`${regName}.${registerItem.textDefault}`)}
        />
      )}

      <section className='flex w-full items-center justify-end'>
        <div className='flex items-center'>
          <Controller
            control={methods.control}
            name={`${regName}.${registerItem.isMultiLine}`}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <label className='checkbox path'>
                <input
                  type='checkbox'
                  onChange={onChange}
                  checked={value || false}
                />
                <svg viewBox='0 0 21 21'>
                  <path d='M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186' />
                </svg>
              </label>
            )}
          />
          Nhiều dòng
        </div>
      </section>
    </main>
  )
}
