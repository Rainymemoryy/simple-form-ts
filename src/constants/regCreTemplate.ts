export const registerItem = {
  items: 'items',
  itemName: 'itemName',
  itemTmpID: 'itemTmpID',
  itemType: 'itemType',
  itemDecs: 'itemDecs',
  itemIsRequired: 'itemIsRequired'
}

export const registerCreateItem = {
  itemName: 'createItem.itemName',
  itemTmpID: 'createItem.itemTmpID',
  itemType: 'createItem.itemType'
}

export const regItem = (itemIndex: number) =>
  `${registerItem.items}[${itemIndex}]`
