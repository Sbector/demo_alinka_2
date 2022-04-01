import React from 'react'

const Sphere = ({ color, position,rotation }) => {
  return (
    <mesh position={position}
          rotation-y={rotation}>
        <boxGeometry />
        <meshStandardMaterial color={color} wireframe/>
    </mesh>
  )
}

export default Sphere