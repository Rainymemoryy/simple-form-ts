/* eslint-disable react-hooks/exhaustive-deps */
import ItemText from '../CreateTemplate/TypeItem/ItemText'
import ItemImage from '../CreateTemplate/TypeItem/ItemImage'
import ItemVectorLayout from '../CreateTemplate/TypeItem/ItemVectorLayout'
import CheckboxOrRadio from './ItemContentType/CheckboxOrRadio'
import Vector from './ItemContentType/Vector'
import { itemType } from '../../constants/itemType'
import { TextareaAutosize } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../constants/regCreTemplate'

interface Props {
  regName: string
  index: number
  fields: any
}

export default function ItemLayout({ regName, fields }: Props) {
  const { itemName, itemDecs, isMultiLine, itemType: type } = fields
  const { register } = useFormContext()

  return (
    <main className='relative flex flex-1 items-center'>
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
                  className='w-full rounded border border-slate-200  px-3 py-1.5 outline-none outline-0'
                  placeholder='Nhập một câu ngắn'
                  {...register(`${regName}.${registerItem.textDefault}`)}
                />
              )}
            </>
          )}
          {type === itemType.checkbox && (
            <CheckboxOrRadio regName={regName} type={itemType.checkbox} />
          )}
          {type === itemType.radio && (
            <CheckboxOrRadio regName={regName} type={itemType.checkbox} />
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

      <div className='absolute left-2 h-[50%] w-1 rounded-full bg-violet-400 opacity-50'></div>
    </main>
  )
}
