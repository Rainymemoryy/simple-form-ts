import CreateTemplate from '../../component/CreateTemplate/CreateTemplate'
import Template404 from '../../component/CreateTemplate/Template404'

export default function CreateTemplatePage() {
  return (
    <main className='flex max-h-screen justify-center scroll-smooth'>
      <section className='hidden h-screen w-full max-w-7xl sm:block'>
        <CreateTemplate />
      </section>

      <section className='sm:hidden'>
        <Template404 />
      </section>
    </main>
  )
}
