import React from 'react'
// Texture loader
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from '@react-three/fiber'

const Peregrino = ({ posX, posY, posZ, num}) => {

  const texture = useLoader(TextureLoader, `./img/srgb/tepeyac-(${num}).jpg`)
  return (
    <mesh position={[posX, posY, posZ]} rotation={[-Math.PI / 2, 0, 0]} >
        <planeGeometry args={[.75,1]} />
        <meshBasicMaterial map={ texture } toneMapped={false}/>
    </mesh>
  )
}

export default Peregrino