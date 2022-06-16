import { Switch } from '@mui/material'
import React, { useState } from 'react'
import VectorEditing from './Vector/VectorEditing'
import VectorPreview from './Vector/VectorPreview'

export default function ItemVectorLayout({ regName }: any) {
  const [isPreview, setIsPreview] = useState(false)

  return (
    <>
      <div>
        <Switch
          value={isPreview}
          onChange={e => setIsPreview(e.target.checked)}
        />
      </div>
      {isPreview && <VectorPreview regName={regName} />}
      {isPreview || <VectorEditing regName={regName} />}
    </>
  )
}
