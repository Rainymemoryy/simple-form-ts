import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
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
    <table className='w-full'>
      <thead>
        <tr>
          <th></th>
          {cols?.map((col: any) => (
            <>
              <th className='font-normal'>{col.value}</th>
            </>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row: any) => (
          <tr>
            <td>{row.value}</td>
            {cols?.map((col: any) => (
              <>
                <th>
                  {/* <div className='flex h-[42px] w-full items-center justify-center opacity-50'>
                    <CheckBoxOutlineBlankIcon />
                  </div> */}
                  <Checkbox />
                </th>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
