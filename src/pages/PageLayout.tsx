/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { BsClipboardCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { path } from '../constants/path'
const tabData = [
  {
    icon: (
      <BsClipboardCheck className='h-5 w-5 fill-current text-gray-400 group-hover:text-blue-500' />
    ),
    name: 'Tạo biểu mẫu'
  },
  {
    icon: (
      <BsClipboardCheck className='h-5 w-5 fill-current text-gray-400 group-hover:text-blue-500' />
    ),
    name: 'Tạo biểu mẫu'
  },
  {
    icon: (
      <BsClipboardCheck className='h-5 w-5 fill-current text-gray-400 group-hover:text-blue-500' />
    ),
    name: 'Tạo biểu mẫu'
  },
  {
    icon: (
      <BsClipboardCheck className='h-5 w-5 fill-current text-gray-400 group-hover:text-blue-500' />
    ),
    name: 'Tạo biểu mẫu'
  }
]
export default function PageLayout({ children }: any) {
  const [open, setOpen] = useState(true)
  return (
    <div className='flex h-screen w-full bg-white font-sans text-gray-900 '>
      <aside className='relative flex flex-col border-r border-gray-200 py-4 px-6'>
        <button
          className='absolute -right-2.5 top-5 flex items-center justify-center rounded-full border border-gray-200 bg-gray-100 '
          onClick={() => setOpen(!open)}
        >
          <ChevronLeftIcon className='h-4 w-4 text-gray-400' />
        </button>

        {open && (
          <>
            <img src='/img/logo.png' alt='' className='w-24' />
            <ul className='flex flex-col gap-y-5 pt-12'>
              {tabData.map(e => (
                <li>
                  <a className='group flex items-center gap-x-3'>
                    {e.icon}
                    <span className='inline-block text-sm leading-6 text-gray-600 group-hover:font-semibold group-hover:text-gray-800'>
                      {e.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>

      <main className='flex-1 overflow-y-scroll'>
        <Link to={path.home}>
          <div className='group fixed top-0 flex h-[60px] w-full items-center gap-x-1 pl-10 text-gray-400'>
            <ArrowLeftIcon className='h-4 w-4 fill-current transition-all group-hover:scale-150 group-hover:fill-slate-900' />
            <span className='inline-block pt-0.5 text-sm leading-6'>
              Về trang chủ
            </span>
          </div>
        </Link>

        <section className='pl-10'>
          <div className='h-[60px] w-full'></div>
          {!!children && children}
        </section>
      </main>
    </div>
  )
}
