import React, { useState } from 'react'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
// import TextareaAutosize from "react-textarea-autosize";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess'
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IconButton, Switch, TextareaAutosize } from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import ItemCheckbox from './ItemCheckbox'
import ItemText from './ItemText'
import ItemImage from './ItemImage'
import SelectType from './SelectType'
import WarningIcon from '@mui/icons-material/Warning'

export default function ItemLayout(props) {
  const { type, provided, snapshot } = props
  const [isShowContent, setShowContent] = useState(true)
  const [typeItem, setTypeItem] = useState(10)

  return (
    <main className='flex items-center relative'>
      <div
        className='opacity-50 group-hover:opacity-100 hover:fill-violet-400 absolute left-[-24px]'
        {...provided.dragHandleProps}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <DragIndicatorIcon />
      </div>
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

            // {...methods.register(`itemName`)}
          />

          {/* <div className="px-3 rounded hover:bg-violet-50 box-border h-8 flex items-center gap-1 text-violet-700">
            <span className="text-sm">Chọn một lựa chọn</span>
            <CheckBoxIcon fontSize="small" />
          </div> */}

          <SelectType
            value={typeItem}
            onChange={e => setTypeItem(e.target.value)}
          />
        </div>

        <TextareaAutosize
          aria-label='Item description'
          className='input-text text-sm resize-none w-full text-gray-500'
          placeholder='Nhập mô tả'
        />

        {isShowContent && type === 1 && <ItemCheckbox />}
        {isShowContent && type === 2 && <ItemImage />}
        {isShowContent && type === 3 && <ItemText />}

        <div className='flex justify-between pt-2 gap-3 items-center'>
          <div className='flex justify-end gap-3 items-center text-yellow-400'>
            <WarningIcon />
            không hỗ trợ điện thoại
          </div>

          <div className='flex justify-end gap-3 items-center'>
            <IconButton
              className='w-8 h-8 hover:text-violet-700'
              onClick={() => setShowContent(!isShowContent)}
            >
              {isShowContent ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
            </IconButton>

            <IconButton className='w-8 h-8 hover:text-violet-700'>
              <ContentCopyIcon />
            </IconButton>

            <IconButton className='w-8 h-8 hover:text-violet-700'>
              <DeleteOutlineIcon />
            </IconButton>

            <div className='flex items-center border-l'>
              <Switch />
              Xác thực
            </div>

            <div className='flex items-center border-l'>
              <Switch />
              Bắt buộc
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
