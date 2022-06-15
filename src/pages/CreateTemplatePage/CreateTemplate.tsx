import Template404 from '../../component/CreateTemplate/Template404'
import TemplateDetail from '../../component/CreateTemplate/TemplateDetail'

export default function CreateTemplate() {
  return (
    <main className='max-h-screen text-gray-700 bg-slate-50 flex justify-center overflow-auto'>
      <section className='w-full max-w-7xl'>
        <TemplateDetail />
      </section>

      <section className='sm:hidden'>
        <Template404 />
      </section>
    </main>
  )
}
