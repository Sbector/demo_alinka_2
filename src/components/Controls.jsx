import { MapControls } from '@react-three/drei'

import React from 'react'

const Controls = () => {
  return (
    <MapControls 
      enableRotate={false}
      minDistance={.36}
    />
  )
}

export default Controls