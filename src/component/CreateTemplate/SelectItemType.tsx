import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { Controller, useFormContext } from 'react-hook-form'
import { itemType } from '../../constants/itemType'

import {
  BsUiRadiosGrid,
  BsUiChecksGrid,
  BsImageFill,
  BsTextParagraph,
  BsCalendarEvent,
  BsClock,
  BsCheckSquare,
  BsRecordCircle
} from 'react-icons/bs'
import { registerItem } from '../../constants/regCreTemplate'

export const listItemType = [
  {
    name: 'Text',
    icon: <BsTextParagraph className='h-5 w-5 text-[#172b4d]' />,
    value: itemType.text
  },
  {
    name: 'Checkbox',
    icon: <BsCheckSquare className='h-5 w-5 text-[#172b4d]' />,
    value: itemType.checkbox
  },
  {
    name: 'Radio',
    icon: <BsRecordCircle className='h-5 w-5 text-[#172b4d]' />,
    value: itemType.radio
  },
  {
    name: 'Time',
    icon: <BsClock className='h-5 w-5 text-[#172b4d]' />,
    value: itemType.time
  },
  {
    name: 'Date',
    icon: <BsCalendarEvent className='h-5 w-5 text-[#172b4d]' />,
    value: itemType.date
  },
  {
    name: 'Image',
    icon: <BsImageFill className='h-5 w-5 text-[#172b4d]' />,
    value: itemType.image
  },

  {
    name: 'List Checkbox',
    icon: <BsUiChecksGrid className='h-5 w-5 text-[#172b4d]' />,
    value: itemType.vectorCheckbox
  },
  {
    name: 'List Radio',
    icon: <BsUiRadiosGrid className='h-5 w-5 text-[#172b4d]' />,
    value: itemType.vectorRadio
  }
]

export const getItemByValue = (value: any) =>
  listItemType.find(e => e.value === value)

interface Props {
  regName?: any
}

export default function SelectItemType({ regName }: Props) {
  const methods = useFormContext()

  return (
    <div className='relative w-52'>
      <Controller
        control={methods.control}
        name={`${regName}.${registerItem.itemType}`}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Listbox
            value={value}
            onChange={e => {
              onChange(e)
              methods.setValue(`${regName}.${registerItem.isShowContent}`, true)
            }}
          >
            <div className='relative'>
              <Listbox.Button className='relative w-full cursor-default rounded bg-violet-50 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                <div className='flex items-center gap-2'>
                  <span className=''>{getItemByValue(value)?.icon}</span>
                  <span className=''>{getItemByValue(value)?.name}</span>
                </div>

                <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                  <SelectorIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>

              <Transition
                as={Fragment}
                leave='transition ease-in duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='absolute z-40 mt-2 w-full overflow-auto rounded bg-white p-1.5 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {listItemType.map((itemType, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `flex h-10 cursor-default select-none items-center rounded pl-1.5 pr-0.5 outline-none transition-colors ${
                          active ? ' bg-violet-50' : 'text-gray-900'
                        }`
                      }
                      value={itemType.value}
                    >
                      {({ selected }) => (
                        <>
                          <div className='flex flex-1 items-center gap-2'>
                            {itemType.icon}
                            <span>{itemType.name}</span>
                          </div>
                          {selected ? (
                            <span className=' inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                              <CheckIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        )}
      />
    </div>
  )
}
