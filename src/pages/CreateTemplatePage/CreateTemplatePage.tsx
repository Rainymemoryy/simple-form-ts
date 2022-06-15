import CreateTemplate from '../../component/CreateTemplate/CreateTemplate'
import Template404 from '../../component/CreateTemplate/Template404'

export default function CreateTemplatePage() {
  return (
    <main className='max-h-screen h-screen text-gray-700 bg-slate-50 flex justify-center overflow-auto scroll-smooth'>
      <section className='w-full max-w-7xl hidden sm:block'>
        <CreateTemplate />
      </section>

      <section className='sm:hidden'>
        <Template404 />
      </section>
    </main>
  )
}
