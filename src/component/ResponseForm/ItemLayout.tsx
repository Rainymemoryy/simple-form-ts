/* eslint-disable react-hooks/exhaustive-deps */

import ItemImage from '../CreateTemplate/TypeItem/ItemImage'
import { itemType } from '../../constants/itemType'
import { TextareaAutosize } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../constants/regCreTemplate'
import Vector from './Vector'
import { useState } from 'react'

interface Props {
  regName: string
  index: number
  fields: any
}
const randomColor = () => {
  const color = Math.random() * 3
  return color > 2 ? 'bg-yellow-50' : color > 1 ? 'bg-red-50' : ''
}
export default function ItemLayout({ regName, fields }: Props) {
  const { itemName, itemDecs, isMultiLine, itemType: type } = fields
  const { register, control } = useFormContext()

  const [color] = useState(randomColor)

  return (
    <main className='relative flex flex-1 items-center'>
      <section
        className={`flex flex-1 flex-col rounded bg-white p-6 outline-0 ${color}`}
      >
        {itemName && (
          <p className='min-h-[32px] flex-1 resize-none text-lg font-medium tracking-wide'>
            {itemName}
          </p>
        )}

        <>
          {itemDecs?.split('\n')?.map((line, index) => (
            <p className='w-full text-sm text-gray-600' key={index}>
              {line}
            </p>
          ))}
        </>

        <div className='pt-4'>
          {type === itemType.text && (
            <>
              {isMultiLine ? (
                <TextareaAutosize
                  id={regName + 'text'}
                  className='w-full resize-none rounded border bg-transparent px-3 py-1.5 outline-none outline-1 hover:border-violet-200 focus:border-violet-400'
                  placeholder='Nhập một đoạn văn'
                  minRows={2}
                  {...register(`${regName}.${registerItem.textDefault}`)}
                />
              ) : (
                <input
                  id={regName + 'text'}
                  className='w-full truncate rounded border border-slate-200 bg-transparent px-3 py-1.5 opacity-100 outline-none outline-0 hover:border-violet-200 focus:border-violet-400'
                  placeholder='Nhập một câu ngắn'
                  {...register(`${regName}.${registerItem.textDefault}`)}
                />
              )}
              {true && (
                <label htmlFor={regName + 'text'}>
                  <p className='cursor-pointer text-sm text-red-400'>
                    * Đây là bắt buộc phải nhập
                  </p>
                </label>
              )}
            </>
          )}

          {(type === itemType.checkbox || type === itemType.radio) && (
            <>
              {fields.listCheckOrRadio?.map((item, index) => (
                <section
                  className='group relative flex w-full items-center'
                  key={index}
                >
                  {type === itemType.checkbox && (
                    <Controller
                      control={control}
                      name={`${regName}.listCheckOrRadio[${index}].isCheck`}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <div className='flex h-9 w-10 items-center justify-center'>
                          <input
                            type='checkbox'
                            id={`${regName}.listCheckOrRadio[${index}]`}
                            onChange={onChange}
                            checked={value || false}
                          />
                        </div>
                      )}
                    />
                  )}

                  {type === itemType.radio && (
                    <Controller
                      control={control}
                      name={`${regName}.isCheck`}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <div className='flex h-9 w-10 items-center justify-center'>
                          <input
                            type='radio'
                            id={`${regName}.listCheckOrRadio[${index}]`}
                            name={`${regName}.${registerItem.radioCheck}`}
                          />
                        </div>
                      )}
                    />
                  )}

                  <label htmlFor={`${regName}.listCheckOrRadio[${index}]`}>
                    <div className='flex h-8 flex-1 cursor-pointer items-center'>
                      {item.value}
                    </div>
                  </label>
                </section>
              ))}
            </>
          )}

          {type === itemType.image && <ItemImage />}
          {(type === itemType.vectorCheckbox ||
            type === itemType.vectorRadio) && (
            <Vector regName={regName} type={itemType.vectorCheckbox} />
          )}
        </div>
      </section>

      <div className={`absolute left-2 h-[50%] w-1 rounded-full opacity-50`} />
    </main>
  )
}
