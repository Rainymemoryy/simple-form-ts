import React, { useState } from 'react'
import VectorEditing from './Vector/VectorEditing'
import VectorPreview from './Vector/VectorPreview'

export default function ItemVectorLayout({ regName }: any) {
  const [isPreview, setIsPreview] = useState(false)

  return (
    <>
      {isPreview && <VectorPreview regName={regName} />}
      {isPreview || <VectorEditing regName={regName} />}
      <div className='flex w-full items-center justify-end gap-2'>
        <input
          type='checkbox'
          className='switch'
          checked={isPreview}
          onChange={e => setIsPreview(e.target.checked)}
        />
        Coi trước
      </div>
    </>
  )
}
