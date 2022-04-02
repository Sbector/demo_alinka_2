import { MapControls } from '@react-three/drei'

import React from 'react'

const Controls = () => {
  return (
    <MapControls 
      enableRotate={false}
      minDistance={.36}
      maxDistance={6}
    />
  )
}

export default Controls