/* eslint-disable @typescript-eslint/no-unused-vars */
import { render } from '@testing-library/react'
import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { itemType } from '../../../constants/itemType'
import { registerItem } from '../../../constants/regCreTemplate'
import ItemCheckbox from './CheckBoxOrRadio/ItemCheckbox'

import ItemImage from './ItemImage'
import ItemText from './ItemText'
import ItemVectorLayout from './ItemVectorLayout'

const useGetType = regName => {
  const methods = useFormContext()
  const typeTMP = methods.watch(`${regName}.${registerItem.itemType}`)
  return typeTMP
}

interface Props {
  regName?: string
  index: number
}

export default function ItemTypeWrapper({ regName, index }: Props) {
  const type = useGetType(regName)

  const renderContent = useMemo(
    () => (
      <div className='py-3'>
        {type === itemType.text && <ItemText regName={regName} />}

        {type === itemType.checkbox && (
          <ItemCheckbox regName={regName} type={type} />
        )}

        {type === itemType.radio && (
          <ItemCheckbox regName={regName} type={type} />
        )}

        {type === itemType.image && <ItemImage />}

        {type === itemType.vectorCheckbox && (
          <ItemVectorLayout regName={regName} type={itemType.vectorCheckbox} />
        )}

        {type === itemType.vectorRadio && (
          <ItemVectorLayout regName={regName} type={itemType.vectorRadio} />
        )}
      </div>
    ),
    [regName, type]
  )

  return <>{renderContent}</>
}
