import React from 'react'

export default function Home() {
  return (
    <main className='flex h-screen'>
      <section className='flex-1 flex justify-center items-center'></section>
      <section className='flex-1 bg-slate-50 flex justify-center items-center'>
        <div aria-label='Lựa chọn container' className='flex flex-col gap-3'>
          <button className='bg-white flex relative h-20 w-96 rounded-lg border outline-none border-violet-200 hover:border-violet-400 hover:shadow-xl'>
            <label className='w-10 h-10 rounded-full bg-violet-400 absolute right-5 top-5 flex justify-between items-center scale-150'></label>
            <label className='w-10 h-10 rounded-full bg-violet-400 absolute right-5 top-5 shadow-55 flex justify-between items-center'>
              <svg
                className='w-6 h-6 fill-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                <path d='M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z' />
              </svg>
            </label>
          </button>
        </div>
      </section>
    </main>
  )
}
