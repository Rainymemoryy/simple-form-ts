import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import ItemLayout from '../component/ResponseForm/ItemLayout'
import { regItem } from '../constants/regCreTemplate'

const form = JSON.parse(
  JSON.stringify({
    items: [
      {
        itemName: 'Nhập tên câu hỏi',
        itemType: 'Text',
        isShowContent: true,
        itemDecs:
          'Đơn giản chỉ với 1 đôi giày có thể làm nổi bật lên cá tính phong cách cách riêng của bạn \nCách mix màu sành điệu \nDễ phối đồ dù là trang phục bụi bặm hay váy xuông cá tính \nNếu quý khách muốn biết rõ hơn về sản phẩm Xin vui lòng CHAT vs SHOP để được tư vấn trước khi đặt hàng \n✅Kích thước ( SIZE) 35,36,37,38,39\n✅Chiều cao đế 5cm\n✅Ôm chân, thon gọn, tuyệt xinh',
        textDefault: 'Nhập mô tả cho nhiều dòng nè bạn ơi',
        isMultiLine: true
      },
      {
        itemName: 'Nhập tên câu hỏi - copy',
        itemType: 'Text',
        isShowContent: true,
        itemDecs:
          'Đơn giản chỉ với 1 đôi giày có thể làm nổi bật lên cá tính phong cách cách riêng của bạn \nCách mix màu sành điệu \nDễ phối đồ dù là trang phục bụi bặm hay váy xuông cá tính \nNếu quý khách muốn biết rõ hơn về sản phẩm Xin vui lòng CHAT vs SHOP để được tư vấn trước khi đặt hàng \n✅Kích thước ( SIZE) 35,36,37,38,39\n✅Chiều cao đế 5cm\n✅Ôm chân, thon gọn, tuyệt xinh',
        textDefault: 'Nhập mô tả cho nhiều dòng nè bạn ơi',
        isMultiLine: false
      },
      {
        itemName: 'Nhập tên câu hỏi',
        itemType: 'CheckBox',
        isShowContent: true,
        itemDecs:
          'Đơn giản chỉ với 1 đôi giày có thể làm nổi bật lên cá tính phong cách cách riêng của bạn \nCách mix màu sành điệu \nDễ phối đồ dù là trang phục bụi bặm hay váy xuông cá tính \nNếu quý khách muốn biết rõ hơn về sản phẩm Xin vui lòng CHAT vs SHOP để được tư vấn trước khi đặt hàng \n✅Kích thước ( SIZE) 35,36,37,38,39\n✅Chiều cao đế 5cm\n✅Ôm chân, thon gọn, tuyệt xinh',
        textDefault: 'Nhập mô tả cho nhiều dòng nè bạn ơi',
        isMultiLine: false,
        rows: [
          { value: 'Hàng 1' },
          { value: 'Hàng 2' },
          { value: 'Hàng 3' },
          { value: 'Hàng 4' },
          { value: 'Hàng 5' },
          { value: 'Hàng 6' },
          { value: 'Hàng 7' }
        ],
        cols: [
          { value: 'Cột 1' },
          { value: 'Cột 2' },
          { value: 'Cột 3' },
          { value: 'Cột 4' },
          { value: 'Cột 5 ' },
          { value: 'Cột 6' },
          { value: 'Cột 7' }
        ],
        listCheckOrRadio: [
          { value: 'Lựa chọn số 1', isCheck: true },
          { value: 'Lựa chọn số 2', isCheck: true },
          { value: 'Lựa chọn số 3' },
          { value: 'Lựa chọn só 4' },
          { value: 'Lựa chọn số 5' }
        ]
      },
      {
        itemName: 'Nhập tên câu hỏi - copy',
        itemType: 'Radio',
        isShowContent: true,
        itemDecs:
          'Đơn giản chỉ với 1 đôi giày có thể làm nổi bật lên cá tính phong cách cách riêng của bạn \nCách mix màu sành điệu \nDễ phối đồ dù là trang phục bụi bặm hay váy xuông cá tính \nNếu quý khách muốn biết rõ hơn về sản phẩm Xin vui lòng CHAT vs SHOP để được tư vấn trước khi đặt hàng \n✅Kích thước ( SIZE) 35,36,37,38,39\n✅Chiều cao đế 5cm\n✅Ôm chân, thon gọn, tuyệt xinh',
        textDefault: 'Nhập mô tả cho nhiều dòng nè bạn ơi',
        isMultiLine: false,
        rows: [
          { value: 'Hàng 1' },
          { value: 'Hàng 2' },
          { value: 'Hàng 3' },
          { value: 'Hàng 4' },
          { value: 'Hàng 5' },
          { value: 'Hàng 6' },
          { value: 'Hàng 7' }
        ],
        cols: [
          { value: 'Cột 1' },
          { value: 'Cột 2' },
          { value: 'Cột 3' },
          { value: 'Cột 4' },
          { value: 'Cột 5 ' },
          { value: 'Cột 6' },
          { value: 'Cột 7' }
        ],
        listCheckOrRadio: [
          { value: 'Lựa chọn số 1', isCheck: true },
          { value: 'Lựa chọn số 2', isCheck: true },
          { value: 'Lựa chọn số 3' },
          { value: 'Lựa chọn só 4' },
          { value: 'Lựa chọn số 5' }
        ]
      },
      {
        itemName: 'Nhập tên câu hỏi - copy',
        itemType: 'vectorCheckbox',
        isShowContent: true,
        itemDecs:
          'Đơn giản chỉ với 1 đôi giày có thể làm nổi bật lên cá tính phong cách cách riêng của bạn \nCách mix màu sành điệu \nDễ phối đồ dù là trang phục bụi bặm hay váy xuông cá tính \nNếu quý khách muốn biết rõ hơn về sản phẩm Xin vui lòng CHAT vs SHOP để được tư vấn trước khi đặt hàng \n✅Kích thước ( SIZE) 35,36,37,38,39\n✅Chiều cao đế 5cm\n✅Ôm chân, thon gọn, tuyệt xinh',
        textDefault: 'Nhập mô tả cho nhiều dòng nè bạn ơi',
        isMultiLine: false,
        rows: [
          { value: 'Hàng 1' },
          { value: 'Hàng 2' },
          { value: 'Hàng 3' },
          { value: 'Hàng 4' },
          { value: 'Hàng 5' },
          { value: 'Hàng 6' },
          { value: 'Hàng 7' }
        ],
        cols: [
          { value: 'Cột 1' },
          { value: 'Cột 2' },
          { value: 'Cột 3' },
          { value: 'Cột 4' },
          { value: 'Cột 5 ' },
          { value: 'Cột 6' },
          { value: 'Cột 7' }
        ]
      },
      {
        itemName: 'Nhập tên câu hỏi - copy',
        itemType: 'vectorRadio',
        isShowContent: true,
        itemDecs:
          'Đơn giản chỉ với 1 đôi giày có thể làm nổi bật lên cá tính phong cách cách riêng của bạn \nCách mix màu sành điệu \nDễ phối đồ dù là trang phục bụi bặm hay váy xuông cá tính \nNếu quý khách muốn biết rõ hơn về sản phẩm Xin vui lòng CHAT vs SHOP để được tư vấn trước khi đặt hàng \n✅Kích thước ( SIZE) 35,36,37,38,39\n✅Chiều cao đế 5cm\n✅Ôm chân, thon gọn, tuyệt xinh',
        textDefault: 'Nhập mô tả cho nhiều dòng nè bạn ơi',
        isMultiLine: false,
        rows: [
          { value: 'Hàng 1' },
          { value: 'Hàng 2' },
          { value: 'Hàng 3' },
          { value: 'Hàng 4' },
          { value: 'Hàng 5' },
          { value: 'Hàng 6' },
          { value: 'Hàng 7' }
        ],
        cols: [
          { value: 'Cột 1' },
          { value: 'Cột 2' },
          { value: 'Cột 3' },
          { value: 'Cột 4' },
          { value: 'Cột 5 ' },
          { value: 'Cột 6' },
          { value: 'Cột 7' }
        ]
      }
    ],
    focusItemID: 'e375e76b-9647-4c48-91a9-705dc8ac331b'
  })
)

export default function ResponseFormPage() {
  const methods = useForm({
    defaultValues: {
      items: form.items
    }
  })
  console.log(form)

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
