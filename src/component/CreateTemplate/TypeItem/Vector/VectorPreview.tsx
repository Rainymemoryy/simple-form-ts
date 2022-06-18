import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { itemType } from '../../../../constants/itemType'

export default function VectorPreview({ regName, type }: any) {
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
                  <div className='flex h-10 w-full items-center justify-center'>
                    {type === itemType.vectorCheckbox && (
                      <Controller
                        control={methods.control}
                        name={`${regName}.vectorCheckbox[${index_row}][${index_col}]`}
                        render={({
                          field: { onChange, onBlur, value, ref }
                        }) => (
                          <input
                            type='checkbox'
                            onChange={onChange}
                            checked={value || false}
                          />
                        )}
                      />
                    )}

                    {type === itemType.vectorRadio && (
                      <Controller
                        control={methods.control}
                        name={`${regName}.vectorRadio[${index_row}]`}
                        render={({
                          field: { onChange, onBlur, value, ref }
                        }) => (
                          <input
                            name={`${regName}.vectorRadio[${index_row}]`}
                            type='radio'
                            onChange={() => onChange(index_col)}
                            checked={value === index_col || false}
                          />
                        )}
                      />
                    )}
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
