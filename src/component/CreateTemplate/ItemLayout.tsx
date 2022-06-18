/* eslint-disable react-hooks/exhaustive-deps */
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { IconButton, TextareaAutosize } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning'
import { Controller, useFormContext } from 'react-hook-form'
import { registerItem } from '../../constants/regCreTemplate'
import ItemTypeWrapper from './TypeItem/ItemTypeWrapper'
import SelectItemType from './SelectItemType'
import { useMemo } from 'react'
import { AiFillDelete } from 'react-icons/ai'

import {
  BsChevronContract,
  BsChevronExpand,
  BsFiles,
  BsImage
} from 'react-icons/bs'
import { itemType } from '../../constants/itemType'

const useGetValue = regName => {
  const methods = useFormContext()

  const isShowContent = methods.watch(
    `${regName}.${registerItem.isShowContent}`
  )

  const type = methods.watch(`${regName}.${registerItem.itemType}`)

  return {
    type,
    isShowContent,
    register: methods.register,
    control: methods.control,
    getValues: methods.getValues
  }
}

interface Props {
  provided: any
  snapshot: any
  regName: string
  index: number
  fieldArray: any
}
export default function ItemLayout({
  provided,
  snapshot,
  index,
  regName,
  fieldArray
}: Props) {
  const { isShowContent, register, control, getValues, type } =
    useGetValue(regName)

  const renderTitle = useMemo(
    () => (
      <>
        <div className='flex flex-1 items-center gap-3'>
          <TextareaAutosize
            aria-label='Item name'
            className='input-text mt-0.5 min-h-[32px] flex-1 resize-none py-0.5 text-lg font-medium tracking-wide'
            placeholder='Nhập tên câu hỏi'
            {...register(`${regName}.${registerItem.itemName}`)}
            onKeyDown={(e: any) => {
              if (!e.shiftKey && e.keyCode === 13) {
                e.target.blur()
              }
            }}
          />
          <SelectItemType regName={`${regName}.${registerItem.itemType}`} />
        </div>

        <div className='flex h-8 items-center gap-3'>
          <TextareaAutosize
            aria-label='Item description'
            className='input-text flex-1 resize-none text-sm text-gray-500'
            placeholder='Nhập mô tả'
            {...register(`${regName}.${registerItem.itemDecs}`)}
          />

          <input
            type='file'
            name='myImage'
            accept='image/png, image/gif, image/jpeg'
            className='hidden'
            id={regName + 'descImage'}
          />

          <label htmlFor={regName + 'descImage'}>
            <BsImage className='h-5 w-5 cursor-pointer' />
          </label>
        </div>

        {/* {isShowContent && (
          <img
            className='rounded-md'
            src='https://images.wallpapersden.com/image/wxl-small-memory_58461.jpg'
            alt=''
          />
        )} */}
      </>
    ),
    [index, isShowContent, regName]
  )

  const renderNav = useMemo(
    () => (
      <>
        <div className='flex items-center justify-between gap-3 pt-2'>
          <div className='flex items-center justify-end gap-3 text-yellow-400'>
            <WarningIcon />
          </div>

          <div className='flex items-center justify-end gap-3'>
            <Controller
              control={control}
              name={`${regName}.${registerItem.isShowContent}`}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <button
                  className='flex h-8 w-8 items-center justify-center rounded-full text-slate-900 outline-none hover:bg-slate-50'
                  onClick={() => onChange(!value)}
                >
                  {value ? (
                    <BsChevronContract className='h-5 w-5' />
                  ) : (
                    <BsChevronExpand className='h-5 w-5' />
                  )}
                </button>
              )}
            />

            <IconButton
              className='hover:text-violet-400'
              onClick={() => {
                const field: any = getValues(`${regName}`)
                const copyData = {
                  ...field,
                  itemName: `${field.itemName} - copy`
                }
                fieldArray.insert(index + 1, copyData)
              }}
            >
              {/* <ContentCopyIcon /> */}
              <BsFiles className='h-5 w-5' />
            </IconButton>

            <IconButton
              className='hover:text-violet-400'
              onClick={() => {
                fieldArray.remove(index)
              }}
            >
              {/* <DeleteOutlineIcon /> */}
              <AiFillDelete />
            </IconButton>
            <>
              {console.log(
                type === itemType.vectorCheckbox ||
                  type === itemType.vectorRadio,
                regName
              )}
            </>

            {type === itemType.text && (
              <div className='flex h-10 items-center gap-2 border-l pl-3'>
                <Controller
                  control={control}
                  name={`${regName}.${registerItem.isMultiLine}`}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <input
                      id={`${regName}-MultiLine`}
                      type='checkbox'
                      className='switch'
                      onChange={onChange}
                      onBlur={onBlur}
                      checked={value || false}
                    />
                  )}
                />
                <label htmlFor={`${regName}-MultiLine`}>Nhiều dòng</label>
              </div>
            )}

            {(type === itemType.vectorCheckbox ||
              type === itemType.vectorRadio) && (
              <div className='flex h-10 items-center gap-2 border-l pl-3'>
                <Controller
                  control={control}
                  name={`${regName}.${registerItem.isPreview}`}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <input
                      id={`${regName}-prevew`}
                      type='checkbox'
                      className='switch'
                      onChange={onChange}
                      onBlur={onBlur}
                      checked={value || false}
                    />
                  )}
                />
                <label htmlFor={`${regName}-prevew`}>Xem trước</label>
              </div>
            )}

            <div className='flex h-10 items-center gap-2 border-l pl-3'>
              <Controller
                control={control}
                name={`${regName}.${registerItem.isRequired}`}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <input
                    id={`${regName}`}
                    type='checkbox'
                    className='switch'
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={value || false}
                  />
                )}
              />
              <label htmlFor={`${regName}`}>Bắt buộc</label>
            </div>
          </div>
        </div>
      </>
    ),
    [index, isShowContent, regName, type]
  )

  return (
    <main className='relative flex items-center' id={`${index}`}>
      <section
        className='absolute left-[-24px] opacity-50 hover:fill-violet-400 group-hover:opacity-100'
        {...provided.dragHandleProps}
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <DragIndicatorIcon />
      </section>

      <section
        className={`relative box-border flex flex-1 cursor-default flex-col gap-1 rounded-lg border-2 border-transparent bg-white p-8 pb-6 shadow-11 outline-0 hover:border-violet-400 ${
          snapshot?.isDragging && 'border-violet-400'
        } transition-colors`}
      >
        {renderTitle}

        {isShowContent && <ItemTypeWrapper regName={regName} index={index} />}

        {renderNav}
      </section>
    </main>
  )
}
