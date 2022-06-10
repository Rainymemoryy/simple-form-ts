import { useEffect, useState } from 'react'

export default function useGetTemplateItems(methods) {
  const [listItems, setListItem] = useState([])

  const items = methods?.watch('items')

  useEffect(() => {
    setListItem(items)
  }, [items])

  return listItems
}
