import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Camera } from '@react-three/fiber'
import React from 'react'

type Props = {}

const Player = React.forwardRef((props: Props, ref) => {
  return (
    <group ref={ref}>
        <mesh position={[2,3,3]} rotation={[Math.PI /6, 0, -Math.PI /6]}>
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