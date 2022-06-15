interface Props {
  fieldArray?: any
}

export default function TemplateNav({ fieldArray }: Props) {
  return (
    <nav className='max-h-screen items-center px-8 py-12 '>
      <section aria-label='field name' className='w-full flex flex-col gap-3 '>
        <div className='truncate text-xl rounded-md px-3 py-1.5 hover:bg-violet-100 '>
          Danh sách câu hỏi
        </div>
        {fieldArray.fields.map(item => (
          <a
            className='truncate text-xl rounded-md px-3 py-1.5 hover:bg-violet-100 '
            href={`#${item?.itemTmpID}`}
            key={item?.itemTmpID}
          >
            {item.itemName}
          </a>
        ))}
      </section>
    </nav>
  )
}
