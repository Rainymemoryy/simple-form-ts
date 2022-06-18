/* eslint-disable import/no-anonymous-default-export */
import { TextareaAutosize } from '@mui/material'
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
              <div className='flex h-8 w-8 items-center justify-center'>
                <input
                  type='checkbox'
                  onChange={onChange}
                  checked={value || false}
                />
              </div>
            )}
          />
          Nhiều dòng
        </div>
      </section>
    </main>
  )
}
