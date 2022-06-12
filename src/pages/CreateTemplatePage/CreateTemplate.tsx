import React from 'react'
import Template404 from '../../component/CreateTemplate/Template404'
import TemplateDetail from '../../component/CreateTemplate/TemplateDetail'
import TemplateNav from '../../component/CreateTemplate/TemplateNav'

export default function CreateTemplate() {
  return (
    <main className='h-screen flex text-gray-700 bg-slate-50'>
      <section className='w-96 hidden lg:block'>
        <TemplateNav />
      </section>
      <section className='hidden sm:flex flex-1 justify-center overflow-auto p-3 lg:p-10'>
        <TemplateDetail />
      </section>
      <section className='sm:hidden'>
        <Template404 />
      </section>
    </main>
  )
}
