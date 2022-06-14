import React, { useState } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
import { IconButton, Switch, TextareaAutosize } from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import WarningIcon from '@mui/icons-material/Warning'
import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../constants/regCreTemplate'
import ItemTypeWrapper from './TypeItem/ItemTypeWrapper'
import { Select, Option } from '@material-tailwind/react'
import ShortTextIcon from '@mui/icons-material/ShortText'
import { itemType } from '../../constants/itemType'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ImageIcon from '@mui/icons-material/Image'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import styled from '@emotion/styled'

interface Props {
  provided: any
  snapshot: any
  regName: string
  index: number
  fieldArray: any
}

const SelectWrapper = styled.div`
  width: 200px;

  label {
  }
  button {
    padding: 0 10px;
    outline: none;
    /* border-radius: 4px; */
  }
`

export default function ItemLayout({
  provided,
  snapshot,
  index,
  regName,
  fieldArray
}: Props) {
  const [isShowContent, setShowContent] = useState(true)
  const methods = useFormContext()

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

          {/* <SelectType regName={`${regName}.${registerItem.itemType}`} /> */}

          <SelectWrapper className='w-52'>
            <Controller
              control={methods.control}
              name={`${regName}.${registerItem.itemType}`}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select
                  label='Lựa chọn'
                  onChange={onChange}
                  size='md'
                  value={value || itemType.text}
                >
                  <Option
                    value={itemType.text}
                    className='flex gap-1 items-center text-grey-900 outline-0 border-none'
                  >
                    <ShortTextIcon />
                    <span>Text</span>
                  </Option>
                  <Option
                    value={itemType.checkbox}
                    className='flex gap-1 items-center text-grey-900 outline-0 border-none'
                  >
                    <CheckBoxIcon />
                    <span>Checkbox</span>
                  </Option>
                  <Option
                    value={itemType.radio}
                    className='flex gap-1 items-center text-grey-900 outline-0 border-none'
                  >
                    <RadioButtonCheckedIcon />
                    <span>Radio</span>
                  </Option>
                  <Option
                    value={itemType.time}
                    className='flex gap-1 items-center text-grey-900 outline-0 border-none'
                  >
                    <AccessTimeIcon />
                    <span>Time</span>
                  </Option>
                  <Option
                    value={itemType.date}
                    className='flex gap-1 items-center text-grey-900 outline-0 border-none'
                  >
                    <CalendarTodayIcon />
                    <span>Date</span>
                  </Option>
                  <Option
                    value={itemType.image}
                    className='flex gap-1 items-center text-grey-900 outline-0 border-none'
                  >
                    <ImageIcon />
                    <span>Image</span>
                  </Option>
                </Select>
              )}
            />
          </SelectWrapper>
        </div>

        <TextareaAutosize
          aria-label='Item description'
          className='input-text text-sm resize-none w-full text-gray-500'
          placeholder='Nhập mô tả'
          {...methods.register(`${regName}.${registerItem.itemDecs}`)}
        />

        {isShowContent && (
          <img
            className='rounded-md'
            src='https://images.wallpapersden.com/image/wxl-small-memory_58461.jpg'
            alt=''
          />
        )}

        {isShowContent && <ItemTypeWrapper regName={regName} index={index} />}

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
