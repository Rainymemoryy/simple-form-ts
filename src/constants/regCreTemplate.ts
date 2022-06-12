export const registerItem = {
  items: 'items',

  //type
  itemName: 'itemName',
  itemTmpID: 'itemTmpID',
  itemType: 'itemType',
  itemDecs: 'itemDecs',
  itemCheckOrRadioItem: 'itemCheckOrRadioItem',

  //config
  isRequired: 'itemIsRequired',

  //text
  isMultiLine: 'isMultiLine',

  //check or radio
  listCheckOrRadio: 'listCheckOrRadio'
}

export const regItem = (itemIndex: number) =>
  `${registerItem.items}[${itemIndex}]`
