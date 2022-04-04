import React from 'react'
//Threejs
import { Canvas } from '@react-three/fiber'


const ThreeScene = ({ children }) => {
  return (
    <>
      <Canvas>
        {children}
      </Canvas>
    </>
   
    
  )
}

export default ThreeScene