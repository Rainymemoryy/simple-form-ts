/* eslint-disable import/no-anonymous-default-export */
import { TextareaAutosize } from '@mui/material'
import { useFormContext } from 'react-hook-form'
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
          className='input-text h-8 w-full border-slate-200'
          placeholder='Nhập một câu ngắn'
          {...methods.register(`${regName}.${registerItem.textDefault}`)}
        />
      )}
    </main>
  )
}
