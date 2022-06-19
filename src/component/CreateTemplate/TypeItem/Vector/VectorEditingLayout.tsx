import ColsEditing from './ColsEditing'
import RowsEditing from './RowsEditing'

export default function VectorEditingLayout({ regName, type }: any) {
  return (
    <div className='flex gap-3'>
      <RowsEditing regName={regName} type={type} />
      <div className=' border-r'></div>
      <ColsEditing regName={regName} type={type} />
    </div>
  )
}
