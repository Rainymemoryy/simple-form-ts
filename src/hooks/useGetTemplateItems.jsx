export default function useGetTemplateItems(methods) {
  const items = methods?.watch('items')
  return items?.map(e => e.itemTmpID)
}
