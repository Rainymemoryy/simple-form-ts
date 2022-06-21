interface Props {
  fieldArray?: any
}

export default function TemplateNav({ fieldArray }: Props) {
  return (
    <nav className='max-h-screen items-center p-6 '>
      <section
        aria-label='field name'
        className='flex w-full flex-col gap-2.5 rounded-md'
      >
        <div className='h-10 truncate rounded-md px-3 py-1.5 text-lg text-gray-500'>
          Danh sách câu hỏi
        </div>

        <div className='flex min-h-[500px] flex-col gap-1 rounded-lg border bg-white p-3'>
          {fieldArray.fields.map((item, index) => (
            <div className='group relative left-1 flex items-center hover:bg-slate-50'>
              <a
                className='truncate py-1.5 px-3 text-lg'
                href={`#${index}`}
                key={item?.id}
              >
                {item.itemName}
              </a>
              <div className='absolute left-1 h-1/2 w-1 rounded-full bg-slate-500 opacity-0 transition-opacity group-hover:opacity-100'></div>
            </div>
          ))}
        </div>
      </section>
    </nav>
  )
}
