import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import ItemLayout from '../component/ResponseForm/ItemLayout'
import { regItem } from '../constants/regCreTemplate'

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
    <div className='flex w-full justify-center bg-slate-50'>
      <FormProvider {...methods}>
        <form
          className='relative flex w-full max-w-3xl flex-col py-6'
          onSubmit={methods.handleSubmit(data => console.log('submit', data))}
        >
          {fieldArray.fields?.map((item, index) => (
            <ItemLayout
              index={index}
              regName={regItem(index)}
              key={index}
              fields={fieldArray.fields[index]}
            />
          ))}
        </form>
      </FormProvider>
    </div>
  )
}
