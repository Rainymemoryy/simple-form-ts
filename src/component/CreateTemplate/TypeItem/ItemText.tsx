/* eslint-disable import/no-anonymous-default-export */
import { Checkbox, TextareaAutosize } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { itemType } from '../../../constants/itemType'
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
          {...methods.register(`${regName}.${itemType.textDefault}`)}
        />
      ) : (
        <input
          className='input-text h-8 w-full'
          placeholder='Nhập một câu ngắn'
          {...methods.register(`${regName}.${itemType.textDefault}`)}
        />
      )}

      <section className='flex items-center w-full justify-end'>
        <div className='flex items-center'>
          <Controller
            control={methods.control}
            name={`${regName}.${registerItem.isMultiLine}`}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Checkbox
                onChange={onChange}
                onBlur={onBlur}
                checked={value || false}
              />
            )}
          />
          Nhiều dòng
        </div>
      </section>
    </main>
  )
}
