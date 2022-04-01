import React from 'react'
// Texture loader
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from '@react-three/fiber'

const Peregrino = ({ position, num}) => {

  const texture = useLoader(TextureLoader, `./png/tepeyac (${num}).png`)
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} >
        <planeGeometry args={[.77,1]}/>
        <meshBasicMaterial map={ texture } transparent='true'/>
    </mesh>
  )
}

export default Peregrino