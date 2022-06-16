/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { itemType } from '../../../constants/itemType'
import { registerItem } from '../../../constants/regCreTemplate'
import ItemCheckbox from './CheckBoxOrRadio/ItemCheckbox'

import ItemImage from './ItemImage'
import ItemText from './ItemText'
import ItemVectorLayout from './ItemVectorLayout'

const useGetType = (regName, methods) => {
  const typeTMP = methods.watch(`${regName}.${registerItem.itemType}`)
  const type = useMemo(() => {
    return typeTMP
  }, [typeTMP])
  return type
}

interface Props {
  regName?: string
  index: number
}

export default function ItemTypeWrapper({ regName, index }: Props) {
  const methods = useFormContext()
  const type = useGetType(regName, methods)

  return (
    <div>
      {type === itemType.text && <ItemText regName={regName} />}
      {type === itemType.checkbox && (
        <ItemCheckbox regName={regName} type={type} />
      )}
      {type === itemType.radio && (
        <ItemCheckbox regName={regName} type={type} />
      )}
      {type === itemType.image && <ItemImage />}

      {type === itemType.vectorCheckbox && (
        <ItemVectorLayout regName={regName} />
      )}
    </div>
  )
}
