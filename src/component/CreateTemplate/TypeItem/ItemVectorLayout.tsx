import { Switch } from '@mui/material'
import React, { useState } from 'react'
import VectorEditing from './Vector/VectorEditing'
import VectorPreview from './Vector/VectorPreview'

export default function ItemVectorLayout() {
  const [isEditing, setEditing] = useState(false)

  return (
    <>
      <div>
        <Switch
          value={isEditing}
          onChange={e => setEditing(e.target.checked)}
        />
      </div>
      {isEditing && <VectorEditing />}
      {isEditing || <VectorPreview />}
    </>
  )
}
