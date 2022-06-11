export const registerItem = {
  items: 'items',
  itemName: 'itemName',
  itemTmpID: 'itemTmpID',
  itemType: 'itemType',
  itemDecs: 'itemDecs'
}

export const regItem = (itemIndex: number) =>
  `${registerItem.items}[${itemIndex}]`
