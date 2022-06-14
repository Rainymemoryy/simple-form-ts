import React, { useMemo, useState } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import { Checkbox, IconButton, Switch, TextareaAutosize } from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import WarningIcon from '@mui/icons-material/Warning'
import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../constants/regCreTemplate'
import ItemTypeWrapper from './TypeItem/ItemTypeWrapper'
import { SelectType } from './SelectType'

interface Props {
  provided: any
  snapshot: any
  regName: string
  index: number
  fieldArray: any
}


const useShowContent = (methods, regName) => {
  const isShowContent = methods.watch(
    `${regName}.${registerItem.isShowContent}`
  )
  const data = useMemo(() => {
    return isShowContent
  }, [isShowContent])
  return data
}

export default function ItemLayout({
  provided,
  snapshot,
  index,
  regName,
  fieldArray
}: Props) {
  const methods = useFormContext()
  const isShowContent = useShowContent(methods, regName)
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
        className={`bg-white flex-1 relative rounded-lg gap-1 box-border p-8 pb-6 outline-0 border-2px border-transparent hover:border-violet-400 cursor-default flex flex-col shadow-11 ${
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

        {/* {isShowContent && (
          <img
            className='rounded-md'
            src='https://images.wallpapersden.com/image/wxl-small-memory_58461.jpg'
            alt=''
          />
        )} */}

        {isShowContent && <ItemTypeWrapper regName={regName} index={index} />}

        <div className='flex justify-between pt-2 gap-3 items-center'>
          <div className='flex justify-end gap-3 items-center text-yellow-400'>
            <WarningIcon />
          </div>

          <div className='flex justify-end gap-3 items-center'>
            {/* <IconButton
              className='w-8 h-8 hover:text-violet-700'
              onClick={() => {
                methods.setValue(
                  `${regName}.${registerItem.isShowContent}`,
                  !isShowContent
                )
              }}
            >
              {isShowContent ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
            </IconButton> */}

            <Controller
              control={methods.control}
              name={`${regName}.${registerItem.isShowContent}`}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <IconButton
                  className='w-8 h-8 hover:text-violet-700'
                  onClick={() => onChange(!value)}
                >
                  {value ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
                </IconButton>
              )}
            />

            <IconButton
              className='w-8 h-8 hover:text-violet-700'
              onClick={() => {
                const field: any = methods.getValues(`${regName}`)
                const copyData = {
                  ...field,
                  itemTmpID: `item-${Math.random()}`,
                  itemName: `${field.itemName} - copy`
                }
                fieldArray.insert(index + 1, copyData)
              }}
            >
              <ContentCopyIcon />
            </IconButton>

            <IconButton
              className='w-8 h-8 hover:text-violet-700'
              onClick={() => {
                fieldArray.remove(index)
              }}
            >
              <DeleteOutlineIcon />
            </IconButton>

            <div className='flex items-center border-l'>
              <Controller
                control={methods.control}
                name={`${regName}.${registerItem.isRequired}`}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Switch
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={value || false}
                  />
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
