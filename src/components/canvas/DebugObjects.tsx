import React from 'react'

type Props = {}

const Rock = ({...props}) => (
        <mesh
        {...props}
        >
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color={'green'} />
        </mesh>
)

const DebugObjects = (props: Props) => {
  return (
    <group>
        <Rock position={[4, 2, 0]} />
        <Rock position={[7, 1, 0]} />
        <Rock position={[-1, -3, 0]} />
        <Rock position={[-4, -2, 0]} />
    </group>
  )
}

export default DebugObjects