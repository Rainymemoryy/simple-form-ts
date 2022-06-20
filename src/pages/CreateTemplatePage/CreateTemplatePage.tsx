import CreateTemplate from '../../component/CreateTemplate/CreateTemplate'
import Template404 from '../../component/CreateTemplate/Template404'

export default function CreateTemplatePage() {
  return (
    <main className='flex justify-center text-gray-900'>
      <section className='hidden h-screen w-full max-w-7xl sm:block'>
        {/*  max-h-screen overflow-auto scroll-smooth */}
        <CreateTemplate />
      </section>

      <section className='sm:hidden'>
        <Template404 />
      </section>
    </main>
  )
}
