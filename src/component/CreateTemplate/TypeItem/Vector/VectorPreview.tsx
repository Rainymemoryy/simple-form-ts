import './style.scss'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

export default function VectorPreview({ regName }: any) {
  const methods = useFormContext()

  const { fields: rows } = useFieldArray({
    control: methods.control,
    name: regName + '.rows'
  })

  const { fields: cols } = useFieldArray({
    control: methods.control,
    name: regName + '.cols'
  })

  return (
    <>
      <table className='w-full'>
        <thead>
          <tr>
            <th></th>
            {cols?.map((col: any) => (
              <th key={col.id} className='font-normal'>
                <div>{col.value}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row: any, index_row) => (
            <tr key={row.id} className='group rounded-2xl'>
              <td className='rounded-l px-3 group-odd:bg-slate-50'>
                {<div>{row.value}</div>}
              </td>
              {cols?.map((col: any, index_col) => (
                <td
                  key={col.id}
                  className=' group-odd:bg-slate-50 group-odd:last:rounded-r'
                >
                  <div className='flex h-[42px] w-full items-center justify-center'>
                    <Controller
                      control={methods.control}
                      name={`${regName}.vectorCheckbox[${index_row}][${index_col}]`}
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        // <input
                        //   type='checkbox'
                        //   onChange={onChange}
                        //   onBlur={onBlur}
                        //   checked={value || false}
                        // />

                        <label className='checkbox path'>
                          <input type='checkbox' />
                          <svg viewBox='0 0 21 21'>
                            <path d='M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186' />
                          </svg>
                        </label>
                      )}
                    />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
