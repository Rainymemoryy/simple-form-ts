/* eslint-disable react-hooks/exhaustive-deps */

import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../constants/regCreTemplate'
import ReactTextareaAutosize from 'react-textarea-autosize'
import ItemText from '../CreateTemplate/TypeItem/ItemText'
import ItemImage from '../CreateTemplate/TypeItem/ItemImage'
import ItemVectorLayout from '../CreateTemplate/TypeItem/ItemVectorLayout'
import { itemType } from '../../constants/itemType'
import CheckboxOrRadio from './ItemContentType/CheckboxOrRadio'
import Vector from './ItemContentType/Vector'

const useGetValue = regName => {
  const { register, control, getValues, watch, setFocus, setValue } =
    useFormContext()
  const isShowContent = watch(`${regName}.${registerItem.isShowContent}`)
  const type = watch(`${regName}.${registerItem.itemType}`)

  const focusItemID = watch(`${registerItem.focusItemID}`)
  return {
    type,
    isShowContent,
    register,
    control,
    getValues,
    setFocus,
    focusItemID,
    setValue
  }
}

interface Props {
  regName: string
  index: number
}
export default function ItemLayout({ index, regName }: Props) {
  const { control, setFocus, type } = useGetValue(regName)

  return (
    <main className='relative flex flex-1 items-center'>
      <section className={`flex flex-1 flex-col bg-white p-8 pb-6  outline-0`}>
        <div className='flex flex-1 items-center gap-3'>
          <Controller
            control={control}
            name={`${regName}.${registerItem.itemName}`}
            render={({ field: { onChange, onBlur, value, ref, name } }) => (
              <ReactTextareaAutosize
                disabled
                name={name}
                ref={ref}
                value={value?.trimStart() || ''}
                onChange={onChange}
                aria-label='Item name'
                className='min-h-[32px] flex-1 resize-none overflow-y-hidden bg-transparent text-lg font-medium tracking-wide'
                placeholder='Nhập tên câu hỏi'
                onKeyDown={(e: any) => {
                  if (e.keyCode === 13) {
                    e.target.blur()
                    setFocus(`${regName}.${registerItem.itemDecs}`)
                  }
                }}
              />
            )}
          />
        </div>

        <div className='flex min-h-[32px] items-center gap-3 text-gray-500'>
          <Controller
            control={control}
            name={`${regName}.${registerItem.itemDecs}`}
            render={({ field: { onChange, onBlur, value, ref, name } }) => (
              <ReactTextareaAutosize
                disabled
                aria-label='Item description'
                className='flex-1 resize-none overflow-y-hidden bg-transparent text-sm'
                placeholder='Nhập mô tả'
                name={name}
                onChange={onChange}
                value={value?.trimStart() || ''}
                onKeyDown={(e: any) => {
                  if (e.keyCode === 13 && !e.shiftKey) {
                    e.target.blur()
                  }
                }}
                ref={ref}
              />
            )}
          />
        </div>

        <div>
          {type === itemType.text && <ItemText regName={regName} />}

          {type === itemType.checkbox && (
            <CheckboxOrRadio regName={regName} type={type} />
          )}

          {type === itemType.radio && (
            <CheckboxOrRadio regName={regName} type={type} />
          )}

          {type === itemType.image && <ItemImage />}

          {type === itemType.vectorCheckbox && (
            <Vector regName={regName} type={itemType.vectorCheckbox} />
          )}

          {type === itemType.vectorRadio && (
            <ItemVectorLayout regName={regName} type={itemType.vectorRadio} />
          )}
        </div>
      </section>

      {/* <div className='absolute left-2 h-[50%] w-1 rounded-full bg-violet-400 opacity-50'></div> */}
    </main>
  )
}
