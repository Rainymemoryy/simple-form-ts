import { FormProvider, useFieldArray, useForm } from 'react-hook-form'

const form = JSON.parse(
  '{"items":[{"itemName":"Nhập tên câu hỏi","itemType":"CheckBox","isShowContent":true,"textDefault":"","listCheckOrRadio":[{"value":"một hai ba bón"},{"value":"năm sau bay tam"}]},{"itemName":"Nhập tên câu hỏi - copy","itemType":"Radio","isShowContent":true,"textDefault":"","listCheckOrRadio":[{"value":"một hai ba bón"},{"value":"năm sau bay tam"}]},{"itemName":"Nhập cái gì vào đây cũng dc à","itemType":"Text","isShowContent":true,"textDefault":"","isMultiLine":false},{"itemName":"Nhập cái gì vào đây cũng dc à - copy","itemType":"Text","isShowContent":true,"textDefault":"","isMultiLine":true},{"itemName":"Nhập tên câu hỏi","itemType":"Text","isShowContent":true,"textDefault":""},{"itemName":"Nhập cái gì","itemType":"vectorCheckbox","isShowContent":true,"textDefault":"","itemIsRequired":true,"rows":[{"value":"Nhập cái số 1"},{"value":"Cái hsoso 2"}],"cols":[{"value":"Nhập cái số 3"},{"value":"Nhập cái số 5"}]}],"focusItemID":"fe9d2ca4-c769-4d60-abeb-2bddf0f1970f"}'
)

export default function ResponseFormPage() {
  const methods = useForm({
    defaultValues: {
      items: form.items
    }
  })

  const fieldArray = useFieldArray({
    control: methods.control,
    name: 'items'
  })

  return (
    <div className='h-screen w-full bg-white'>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(data => console.log('submit', data))}
        >
          <main className='relative w-full max-w-3xl py-6'>
            {fieldArray.fields?.map((e: any) => (
              <div key={e?.id}>{e?.itemName}</div>
            ))}
          </main>
        </form>
      </FormProvider>
      <input className='input-text w-10' />
    </div>
  )
}
