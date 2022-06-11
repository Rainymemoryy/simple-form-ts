import { Button, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import SelectType from './SelectType'
import AddTaskIcon from '@mui/icons-material/AddTask'
import { useFieldArray, useFormContext } from 'react-hook-form'

export default function CreateItem() {
  const [itemName, setItemName] = useState('')
  // const [itemType, setItemType] = useState('')
  const methods = useFormContext()

  const { append } = useFieldArray({
    control: methods.control,
    name: 'items'
  })

  return (
    <main className='flex items-center relative py-3'>
      <div
        className={`bg-white flex-1 relative rounded-lg gap-1 box-border p-8 pb-6 outline-none border-2 border-transparent hover:border-violet-400 cursor-default flex flex-col shadow-11 transition-colors`}
      >
        <div className='flex flex-1 gap-3'>
          <TextareaAutosize
            aria-label='Item name'
            className='input-text min-h-[32px] mt-0.5 py-0.5 text-lg tracking-wide font-medium resize-none flex-1'
            placeholder='Nhập tên câu hỏi'
            value={itemName}
            onChange={e => {
              setItemName(e.target.value)
            }}
            onKeyPress={(e: any) => {
              if (e.key === 'Enter') {
                e?.target.blur()
                append({
                  itemName,
                  itemType: 10,
                  itemTmpID: `item-${Math.random()}`
                })
                setItemName('')
              }
            }}
          />
          <SelectType />
        </div>

        <div className='flex justify-between pt-2 gap-3 items-center'>
          <div></div>

          <div className='flex justify-end gap-3 items-center'>
            <Button
              className='button-default flex gap-1.5'
              sx={{
                textTransform: 'unset',
                fontSize: 16,
                fontWeight: '400'
              }}
              disabled={!itemName}
            >
              <span className='text-center block'> Tạo một câu hỏi mới</span>
              <AddTaskIcon />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
