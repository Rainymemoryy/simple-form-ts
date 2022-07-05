import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm
} from 'react-hook-form'

import ReactTextareaAutosize from 'react-textarea-autosize'
import ItemLayout from '../component/ResponseForm/ItemLayout'
import { regItem } from '../constants/regCreTemplate'

const form = JSON.parse(
  JSON.stringify({
    templateName: 'Tên phiếu khảo sát',
    templateDesc: 'Mô tả chi tiết cho phiếu khảo sát',
    templateImage: {},
    items: [
      {
        itemName: 'Nhập tên câu hỏi - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      },
      {
        itemName: 'Nhập tên câu hỏi - copy - copy',
        itemType: 'Text',
        isShowContent: true,
        textDefault: ''
      }
    ],
    focusItemID: 'e916faee-97c0-47c9-8604-d3d5d16b58c9'
  })
)

export default function ResponseFormPage() {
  const methods = useForm({
    defaultValues: {
      items: form.items,
      templateImage: form.templateImage,
      templateName: form.templateName,
      templateDesc: form.templateDesc
    }
  })

  const { control } = methods

  const fieldArray = useFieldArray({
    control: methods.control,
    name: 'items'
  })

  return (
    <div className='flex w-full justify-center bg-slate-50'>
      <FormProvider {...methods}>
        <form
          className='relative flex w-full max-w-3xl flex-col gap-3 py-6 px-3'
          onSubmit={methods.handleSubmit(data => console.log('submit', data))}
        >
          <div className='my-3 rounded-lg bg-white p-8 shadow-11'>
            <Controller
              control={control}
              name='templateName'
              defaultValue='Tên phiếu khảo sát'
              render={({ field: { onChange, onBlur, value, ref, name } }) => (
                <ReactTextareaAutosize
                  name={name}
                  ref={ref}
                  value={value?.trimStart() || ''}
                  onChange={onChange}
                  aria-label='Item name'
                  className='input-text min-h-[32px] w-full flex-1 resize-none overflow-y-hidden text-xl font-medium tracking-wide'
                  placeholder='Tên phiếu khảo sát'
                  onKeyDown={(e: any) => {
                    if (e.keyCode === 13) {
                      e.target.blur()
                    }
                  }}
                />
              )}
            />

            <Controller
              control={control}
              name='templateDesc'
              defaultValue='Mô tả chi tiết cho phiếu khảo sát'
              render={({ field: { onChange, onBlur, value, ref, name } }) => (
                <ReactTextareaAutosize
                  name={name}
                  ref={ref}
                  value={value?.trimStart() || ''}
                  onChange={onChange}
                  aria-label='Item name'
                  className='input-text w-full flex-1 resize-none overflow-y-hidden text-sm text-gray-500'
                  placeholder='Mô tả'
                  onKeyDown={(e: any) => {
                    if (e.keyCode === 13) {
                      e.target.blur()
                    }
                  }}
                />
              )}
            />

            <Controller
              defaultValue={null}
              control={control}
              name='templateImage'
              render={({ field: { value } }) => (
                <img
                  className='w-full rounded-lg'
                  src={
                    value ? (value[0] ? URL.createObjectURL(value[0]) : '') : ''
                  }
                  alt=''
                />
              )}
            />
          </div>

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
