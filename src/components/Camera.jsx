import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'


const Camera = () => {
  return (
    <PerspectiveCamera 
        makeDefault
        position={[0, 3.5, 0]}
        fov = {30}
        near = {.35}
    />
  )
}

export default Camera