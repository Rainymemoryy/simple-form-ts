import { useEffect, useState } from 'react'

export default function useGetTemplateItems(methods) {
  const [listItems, setListItem] = useState([])

  const items = methods?.watch('items')

  const tmpData = items?.map(e => e.itemTmpID)

  useEffect(() => {
    setListItem(tmpData)
  }, [tmpData])

  return listItems
}
