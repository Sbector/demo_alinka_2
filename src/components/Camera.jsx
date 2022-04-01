import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'


const Camera = () => {
  return (
    <PerspectiveCamera 
        makeDefault
        position={[0, .15, 10]}
        fov = {55}
        near = {.35}
    />
  )
}

export default Camera