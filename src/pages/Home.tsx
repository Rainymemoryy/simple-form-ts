import React, { useEffect } from 'react'
import { PinInput } from 'react-input-pin-code'
import { Link, useNavigate } from 'react-router-dom'
import { path } from '../constants/path'

export default function Home() {
  const [values, setValues] = React.useState(['', '', '', '', '', ''])
  const navigate = useNavigate()
  useEffect(() => {
    values.every(e => e !== '') &&
      navigate(path.response + values.toString().replaceAll(',', ''))
  }, [navigate, values])
  return (
    <main className='flex h-screen'>
      <section className='flex flex-1 items-center justify-center'></section>
      <section className='flex flex-1 flex-col items-center justify-center gap-10 bg-slate-50'>
        <Link to={path.createTemplate}>
          <div aria-label='Lựa chọn container' className='flex flex-col gap-3'>
            <button className='relative flex h-20 w-96 rounded-lg border border-violet-200 bg-white outline-0 hover:border-violet-400 hover:shadow-xl'>
              <label className='absolute right-5 top-5 flex h-10 w-10 scale-150 items-center justify-between rounded-full bg-violet-400'></label>
              <label className='absolute right-5 top-5 flex h-10 w-10 items-center justify-between rounded-full bg-violet-400 shadow-55'>
                <svg
                  className='h-6 w-6 fill-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  {/*! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                  <path d='M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z' />
                </svg>
              </label>
            </button>
          </div>
        </Link>

        <PinInput
          type='number'
          values={values}
          onChange={(value, index, values) => setValues(values)}
          validBorderColor='rgb(167, 139, 250)'
          borderColor='rgb(221, 214, 254)'
          focusBorderColor='rgb(167, 139, 250)'
        />
      </section>
    </main>
  )
}
