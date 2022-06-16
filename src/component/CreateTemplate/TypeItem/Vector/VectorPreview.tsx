import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { Checkbox } from '@mui/material'

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

  console.log(cols)

  return (
    <table className='w-full font-medium'>
      <thead>
        <tr>
          <th></th>
          {cols?.map((col: any) => (
            <>
              <th className='font-medium'>
                <div>{col.value}</div>
              </th>
            </>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row: any, index_row) => (
          <tr className='group rounded-2xl'>
            <td className='rounded-l px-3 group-odd:bg-slate-50'>
              {<div>{row.value}</div>}
            </td>
            {cols?.map((col: any, index_col) => (
              <td className=' group-odd:bg-slate-50 group-odd:last:rounded-r'>
                <div className='flex h-[42px] w-full items-center justify-center'>
                  <Checkbox />
                  {/* {`${regName}.listCheckbox[${index_row}][${index_col}]`} */}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
