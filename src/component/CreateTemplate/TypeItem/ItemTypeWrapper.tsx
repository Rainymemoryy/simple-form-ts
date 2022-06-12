import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { itemType } from '../../../constants/itemType'

import { registerItem } from '../../../constants/regCreTemplate'
import ItemCheckbox from './ItemCheckbox'
import ItemImage from './ItemImage'
import ItemText from './ItemText'

interface Props {
  regName: string
  index: number
}

export default function ItemTypeWrapper({ regName, index }: Props) {
  const methods = useFormContext()

  const type = methods.watch(`${regName}.${registerItem.itemType}`)

  const RenderItemType = useMemo(() => {
    return (
      <div className='w-full flex' >
        {type === itemType.checkbox && <ItemCheckbox />}
        {type === itemType.image && <ItemImage />}
        {type === itemType.text && <ItemText />}
      </div>
    )
  }, [type])

  return <div>{RenderItemType}</div>
}
