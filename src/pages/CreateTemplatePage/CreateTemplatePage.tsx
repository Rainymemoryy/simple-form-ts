import CreateTemplate from '../../component/CreateTemplate/CreateTemplate'
import Template404 from '../../component/CreateTemplate/Template404'

export default function CreateTemplatePage() {
  return (
    <main className='flex h-screen max-h-screen justify-center overflow-auto scroll-smooth bg-slate-50 text-gray-700'>
      <section className='hidden w-full max-w-7xl sm:block'>
        <CreateTemplate />
      </section>

      <section className='sm:hidden'>
        <Template404 />
      </section>
    </main>
  )
}
