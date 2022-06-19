import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { registerItem } from '../../../constants/regCreTemplate'
import VectorEditingLayout from './Vector/VectorEditingLayout'
import VectorPreview from './Vector/VectorPreview'

const usePreview = regName => {
  const methods = useFormContext()
  const isPreview = methods.watch(`${regName}.${registerItem.isPreview}`)
  return isPreview
}

export default function ItemVectorLayout({ regName, type }: any) {
  const isPreview = usePreview(regName)

  const renderContent = useMemo(
    () => (
      <>
        {isPreview && <VectorPreview regName={regName} type={type} />}
        {isPreview || <VectorEditingLayout regName={regName} type={type} />}
      </>
    ),
    [isPreview, regName, type]
  )

  return <>{renderContent}</>
}
