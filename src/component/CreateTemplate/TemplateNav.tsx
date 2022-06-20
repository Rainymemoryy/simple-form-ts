import { useFormContext } from 'react-hook-form'

interface Props {
  fieldArray?: any
}

const useGetValues = () => {
  const { watch } = useFormContext()
  const fields = watch('items')
  console.log(fields)
}
export default function TemplateNav({ fieldArray }: Props) {
  useGetValues()
  return (
    <nav className='max-h-screen items-center px-8 py-12 '>
      <section aria-label='field name' className='flex w-full flex-col gap-3 '>
        <div className='truncate rounded-md px-3 py-1.5 text-xl '>
          Danh sách câu hỏi
        </div>
        {fieldArray.fields.map((item, index) => (
          <a
            className='truncate rounded-md px-3 py-1.5 text-xl hover:bg-violet-100'
            href={`#${index}`}
            key={item?.id}
          >
            {item.itemName}
          </a>
        ))}
      </section>
    </nav>
  )
}
