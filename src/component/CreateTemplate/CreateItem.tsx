import { useState } from 'react'
import { itemType } from '../../constants/itemType'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import ReactTextareaAutosize from 'react-textarea-autosize'

export default function CreateItem(props: any) {
  const { append } = props
  const [value, setValue] = useState('')

  return (
    <main className='relative flex items-center py-3'>
      <div
        className={`border-2px relative box-border flex flex-1 cursor-default flex-col gap-1 rounded-lg border-transparent bg-white p-8 pb-6 shadow-11 outline-0 transition-colors hover:border-violet-400`}
      >
        <div className='flex flex-1 gap-3'>
          <ReactTextareaAutosize
            aria-label='Item name'
            className='input-text min-h-[36px] flex-1 resize-none border-slate-200 text-lg font-medium tracking-wide'
            placeholder='Nhập tên câu hỏi'
            onChange={e => setValue(e.target.value?.trimStart())}
            value={value}
            onKeyPress={(e: any) => {
              if (e.key === 'Enter' && !e.shiftKey && value !== '') {
                e?.target.blur()
                append({
                  itemName: value.trim(),
                  itemType: itemType.text,
                  isShowContent: true
                })
                setValue('')
              }
            }}
          />

          <button
            className={`button-default flex h-9 items-center gap-3 px-3 py-1.5 transition-colors ${
              value === '' && 'opacity-80'
            }`}
            disabled={value === ''}
            onClick={() => {
              append({
                itemName: value,
                itemType: itemType.text,
                isShowContent: true
              })
              setValue('')
            }}
          >
            <span className='block text-center'> Tạo một câu hỏi mới</span>
            <BsFillArrowRightCircleFill
              className={`transition-transform ${value !== '' && 'scale-150 '}`}
            />
          </button>
        </div>
      </div>
    </main>
  )
}
