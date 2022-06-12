import React, { useState } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import { IconButton, Switch, TextareaAutosize } from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import ItemCheckbox from './ItemCheckbox'
import ItemText from './ItemText'
import ItemImage from './ItemImage'
import WarningIcon from '@mui/icons-material/Warning'
import { registerItem } from '../constants/regCreTemplate'
import { useFormContext } from 'react-hook-form'
import SelectType from './SelectType'

interface Props {
  provided: any
  snapshot: any
  type?: any
  regName: string
  index: number
  remove: any
  insert: any
}

export default function ItemLayout({
  provided,
  snapshot,
  type,
  index,
  regName,
  remove,
  insert
}: Props) {
  const [isShowContent, setShowContent] = useState(true)
  const methods = useFormContext()

  console.log('reRender ItemLayout', regName)

  return (
    <main className='flex items-center relative'>
      <section
        className='opacity-50 group-hover:opacity-100 hover:fill-violet-400 absolute left-[-24px]'
        {...provided.dragHandleProps}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <DragIndicatorIcon />
      </section>
      <section
        className={`bg-white flex-1 relative rounded-lg gap-1 box-border p-8 pb-6 outline-none border-2 border-transparent hover:border-violet-400 cursor-default flex flex-col shadow-11 ${
          snapshot?.isDragging && 'border-violet-400'
        } transition-colors`}
      >
        <div className='flex flex-1 gap-3'>
          <TextareaAutosize
            aria-label='Item name'
            className='input-text min-h-[32px] mt-0.5 py-0.5 text-lg tracking-wide font-medium resize-none flex-1'
            placeholder='Nhập tên câu hỏi'
            {...methods.register(`${regName}.${registerItem.itemName}`)}
            onKeyDown={(e: any) => {
              if (!e.shiftKey && e.keyCode === 13) {
                e.target.blur()
              }
            }}
          />

          <SelectType regName={`${regName}.${registerItem.itemType}`} />
        </div>

        <TextareaAutosize
          aria-label='Item description'
          className='input-text text-sm resize-none w-full text-gray-500'
          placeholder='Nhập mô tả'
          {...methods.register(`${regName}.${registerItem.itemDecs}`)}
        />

        {isShowContent && type === 1 && <ItemCheckbox />}
        {isShowContent && type === 2 && <ItemImage />}
        {isShowContent && type === 3 && <ItemText />}

        <div className='flex justify-between pt-2 gap-3 items-center'>
          <div className='flex justify-end gap-3 items-center text-yellow-400'>
            <WarningIcon />
          </div>

          <div className='flex justify-end gap-3 items-center'>
            <IconButton
              className='w-8 h-8 hover:text-violet-700'
              onClick={() => setShowContent(!isShowContent)}
            >
              {isShowContent ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
            </IconButton>

            <IconButton
              className='w-8 h-8 hover:text-violet-700'
              onClick={() => {}}
            >
              <ContentCopyIcon />
            </IconButton>

            <IconButton
              className='w-8 h-8 hover:text-violet-700'
              onClick={() => {
                remove(index)
              }}
            >
              <DeleteOutlineIcon />
            </IconButton>

            <div className='flex items-center border-l'>
              <Switch
                {...methods.register(
                  `${regName}.${registerItem.itemIsRequired}`
                )}
              />
              Bắt buộc
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
