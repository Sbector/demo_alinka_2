import * as THREE from "three";

import React from 'react'
//Threejs
import { Canvas } from '@react-three/fiber'


const ThreeScene = ({ children }) => {
  return (
    <Canvas
     flat
    >{children}</Canvas>
  )
}

export default ThreeScene