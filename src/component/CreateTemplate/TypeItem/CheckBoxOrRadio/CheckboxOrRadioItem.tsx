import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../../../constants/regCreTemplate'
import { itemType } from '../../../../constants/itemType'
import { BsX } from 'react-icons/bs'
import MemoLayout from './MemoLayout'

interface Props {
  regName: any
  provided: any
  fieldArray: any
  index: any
  regNameItem: any
  type: any
}

export default function CheckboxOrRadioItem({
  provided,
  regName,
  fieldArray,
  index,
  regNameItem,
  type
}: Props) {
  const methods = useFormContext()

  return (
    <main>
      <section className='group relative flex w-full items-center'>
        <div
          className='text-violet-400 opacity-70 group-hover:fill-violet-400 group-hover:opacity-100 '
          {...provided.dragHandleProps}
          onClick={e => {
            e.stopPropagation()
          }}
        >
          <DragIndicatorIcon />
        </div>

        {type === itemType.checkbox && (
          <Controller
            control={methods.control}
            name={`${regName}.isCheck`}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div className='flex h-10 w-10 items-center justify-center'>
                <input
                  type='checkbox'
                  onChange={onChange}
                  checked={value || false}
                />
              </div>
            )}
          />
        )}

        {type === itemType.radio && (
          <Controller
            control={methods.control}
            // name={`${regNameItem}.${registerItem.radioCheck}`}
            name={`${regName}.isCheck`}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div className='flex h-10 w-10 items-center justify-center'>
                <input
                  type='radio'
                  name={`${regNameItem}.${registerItem.radioCheck}`}
                  // onChange={() => onChange(index)}
                  // checked={value === index}
                />
              </div>
            )}
          />
        )}

        <input
          className='input-text h-8 flex-1 group-hover:border-violet-400'
          placeholder='Nhập tuỳ chọn'
          {...methods.register(`${regName}.value`)}
        />
        <div className='flex gap-1'>
          {/* <button
            className={`flex h-8 w-8 items-center justify-center opacity-50 outline-none transition-transform hover:scale-150 hover:opacity-100`}
            onClick={() => {
              let dataTmp = fieldArray.fields[index]
              dataTmp = { ...dataTmp, value: dataTmp.value + ' - copy' }
              fieldArray.insert(index + 1, dataTmp)
            }}
          >
            <BsFiles />
          </button> */}

          {/* <button
            className={`hidden h-5 w-5 items-center justify-center opacity-50 outline-none transition-transform hover:scale-150 hover:opacity-100  group-hover:flex`}
            onClick={() => {
              fieldArray.remove(index)
            }}
          >
            <BsX />
          </button> */}

          <button
            className='opacity-50 outline-none transition-transform hover:scale-150 hover:opacity-100'
            onClick={() => {
              fieldArray.remove(index)
            }}
          >
            <BsX />
          </button>
        </div>
      </section>

      <section className='group relative flex w-full items-center pl-[64px]'>
        <MemoLayout />
      </section>
    </main>
  )
}
