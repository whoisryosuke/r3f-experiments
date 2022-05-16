import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Camera } from '@react-three/fiber'
import React from 'react'

type Props = {}

const Player = React.forwardRef((props: Props, ref) => {
  return (
    <group ref={ref}>
        <mesh position={[0,-1,-3]} rotation={[-Math.PI /2 + Math.PI / 9, 0, 0]}>
          <coneBufferGeometry args={[1, 5, 6]} />
          <meshPhysicalMaterial color={'blue'} />
        </mesh>
      {/* <Camera makeDefault position={[0, 20, -45]} near={1} far={1000} /> */}
      <directionalLight position={[5, 5, 5]} />
    </group>
  )
})

Player.displayName = 'Player'

export default Player