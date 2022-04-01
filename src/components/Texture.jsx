import React from 'react'
// Texture loader
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from '@react-three/fiber'

const Texture = ({ position, num}) => {

  const texture = useLoader(TextureLoader, `./png/tepeyac (${num}).png`)
  return (
    <mesh position={position}>
        <planeGeometry args={[.77,1]}/>
        <meshBasicMaterial map={ texture } transparent='true'/>
    </mesh>
  )
}

export default Texture