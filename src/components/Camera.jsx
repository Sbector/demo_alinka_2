import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'


const Camera = () => {
  return (
    <PerspectiveCamera 
        makeDefault
        position={[0, 5, 0]}
        fov = {55}
        near = {.35}
    />
  )
}

export default Camera