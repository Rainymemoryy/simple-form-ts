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
  textDefault: 'textDefault',

  //check or radio
  listCheckbox: 'listCheckOrRadio',
  radioCheck: 'radioCheck',
  isAnother: 'isAnother',

  //show
  isShowContent: 'isShowContent'
}

export const regItem = (itemIndex: number) =>
  `${registerItem.items}[${itemIndex}]`
