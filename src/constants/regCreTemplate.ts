export const registerItem = {
  items: 'items',

  //type
  itemName: 'itemName',
  itemType: 'itemType',
  itemDecs: 'itemDecs',
  itemImageDesc: 'itemImageDece',

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

  //vector
  isPreview: 'isPreview',

  //show
  isShowContent: 'isShowContent',

  focusItemID: 'focusItemID'
}

export const regItem = (itemIndex: number) =>
  `${registerItem.items}[${itemIndex}]`
