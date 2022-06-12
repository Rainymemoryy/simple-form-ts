import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { itemType } from '../../../constants/itemType'
import { registerItem } from '../../../constants/regCreTemplate'
import ItemCheckbox from './CheckBoxOrRadio/ItemCheckbox'

import ItemImage from './ItemImage'
import ItemText from './ItemText'

interface Props {
  regName?: string
  index: number
}

export default function ItemTypeWrapper({ regName, index }: Props) {
  const methods = useFormContext()
  const [type, setType] = useState(itemType.text)
  const typeTMP = methods.watch(`${regName}.${registerItem.itemType}`)

  useEffect(() => {
    setType(typeTMP)
  }, [typeTMP])

  const RenderItemType = useMemo(() => {
    return (
      <>
        {type === itemType.checkbox && <ItemCheckbox regName={regName} />}
        {type === itemType.image && <ItemImage />}
        {type === itemType.text && <ItemText regName={regName} />}
      </>
    )
  }, [regName, type])

  return <div>{RenderItemType}</div>
}
