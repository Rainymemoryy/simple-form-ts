/* eslint-disable react-hooks/exhaustive-deps */

import ItemImage from '../CreateTemplate/TypeItem/ItemImage'
import { itemType } from '../../constants/itemType'
import { TextareaAutosize } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../constants/regCreTemplate'
import Vector from './Vector'

interface Props {
  regName: string
  index: number
  fields: any
}

export default function ItemLayout({ regName, fields }: Props) {
  const { itemName, itemDecs, isMultiLine, itemType: type } = fields
  const { register, control } = useFormContext()

  return (
    <main className='relative flex flex-1 items-center border-t-2 border-violet-100'>
      <section className={`flex flex-1 flex-col bg-white p-6  outline-0`}>
        {itemName && (
          <p className='min-h-[32px] flex-1 resize-none text-lg font-medium tracking-wide'>
            {itemName}
          </p>
        )}

        {itemDecs && (
          <p className='flex-1 resize-none overflow-y-hidden text-sm'>
            {`Thông số kỹ thuật:
             Kính cường lực rõ ràng bảo vệ màn hình
             Độ cứng 9H có thể chống xước, chống bám vân tay và chống bám bụi hiệu quả.
           `}
          </p>
        )}

        <div>
          {type === itemType.text && (
            <>
              {isMultiLine ? (
                <TextareaAutosize
                  minRows={2}
                  className='w-full resize-none rounded border px-3 py-1.5 outline-none outline-1'
                  placeholder='Nhập một đoạn văn'
                  {...register(`${regName}.${registerItem.textDefault}`)}
                />
              ) : (
                <input
                  className='w-full truncate rounded border  border-slate-200 px-3 py-1.5 outline-none outline-0'
                  placeholder='Nhập một câu ngắn'
                  {...register(`${regName}.${registerItem.textDefault}`)}
                />
              )}
            </>
          )}
          {/* listCheckOrRadio */}
          {(type === itemType.checkbox || type === itemType.radio) && (
            <>
              {fields.listCheckOrRadio?.map((item, index) => (
                <section className='group relative flex w-full items-center'>
                  {type === itemType.checkbox && (
                    <Controller
                      control={control}
                      name={`${regName}.listCheckOrRadio[${index}].isCheck`}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <div className='flex h-8 w-8 items-center justify-center'>
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
                        <div className='flex h-8 w-8 items-center justify-center'>
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

      <div className='absolute left-2 h-[50%] w-1 rounded-full bg-violet-400 opacity-50'></div>
    </main>
  )
}
