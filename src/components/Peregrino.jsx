import React from 'react'
// Texture loader
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from '@react-three/fiber'

const Peregrino = ({ position, num}) => {

  const texture = useLoader(TextureLoader, `./img//tepeyac (${num}).jpg`)
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} >
        <planeGeometry args={[.75,1]} />
        <meshBasicMaterial map={ texture } transparent/>
    </mesh>
  )
}

export default Peregrino