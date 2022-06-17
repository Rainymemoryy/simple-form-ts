import { Switch } from '@mui/material'
import React, { useState } from 'react'
import VectorEditing from './Vector/VectorEditing'
import VectorPreview from './Vector/VectorPreview'

export default function ItemVectorLayout({ regName }: any) {
  const [isPreview, setIsPreview] = useState(false)

  return (
    <>
      {isPreview && <VectorPreview regName={regName} />}
      {isPreview || <VectorEditing regName={regName} />}
      <div className='flex w-full items-center justify-end'>
        <Switch
          value={isPreview}
          onChange={e => setIsPreview(e.target.checked)}
        />
        Coi trước
      </div>
    </>
  )
}
