import { Button, TextareaAutosize } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask'
import { useFormContext } from 'react-hook-form'
import { registerCreateItem } from '../constants/regCreTemplate'
import { itemType } from '../constants/itemType'

export default function CreateItem(props: any) {
  const methods = useFormContext()
  const { append } = props

  return (
    <main className='flex items-center relative py-3'>
      <div
        className={`bg-white flex-1 relative rounded-lg gap-1 box-border p-8 pb-6 outline-none border-2 border-transparent hover:border-violet-400 cursor-default flex flex-col shadow-11 transition-colors`}
      >
        <div className='flex flex-1 gap-3'>
          <TextareaAutosize
            aria-label='Item name'
            className='input-text min-h-[32px] mt-0.5 py-0.5 text-lg tracking-wide font-medium resize-none flex-1'
            placeholder='Nhập tên câu hỏi'
            onKeyPress={(e: any) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e?.target.blur()
                append({
                  itemName: methods.watch(registerCreateItem.itemName),
                  itemType: itemType.text,
                  itemTmpID: `item-${Math.random()}`
                })
                methods.setValue(registerCreateItem.itemName, '')
              }
            }}
            {...methods.register(registerCreateItem.itemName)}
          />

          <Button
            className='button-default flex gap-1.5'
            sx={{
              textTransform: 'unset',
              fontSize: 16,
              fontWeight: '400'
            }}
            disabled={!methods.watch(registerCreateItem.itemName)}
          >
            <span className='text-center block'> Tạo một câu hỏi mới</span>
            <AddTaskIcon />
          </Button>
        </div>
      </div>
    </main>
  )
}
